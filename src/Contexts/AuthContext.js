import React, { Component } from 'react';
import * as Oidc from 'oidc-client';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor (props) {
    super(props);

    if (process.env.NODE_ENV === 'development') {
      Oidc.Log.logger = console;
      Oidc.Log.level = Oidc.Log.INFO;
    }

    const settings = {
      authority: process.env.REACT_APP_AUTHORITY,
      client_id: 'dashboard',
      post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      response_type: 'id_token token',
      scope: 'openid discord makise',
      accessTokenExpiringNotificationTime: 4,
      automaticSilentRenew: true,
      filterProtocolClaims: false,
      checkSessionInterval: 5000,
      silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URI
    };

    let userManager = new Oidc.UserManager(settings);
    this.state = { userManager: userManager };

    this.handleAuthorization = this.handleAuthorization.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.handleSilentLogin = this.handleSilentLogin.bind(this);
    this.handleSilentCallback = this.handleSilentCallback.bind(this);

    userManager.events.addUserLoaded((loadedUser) => {
      if (loadedUser) {
        this.setState({ user: loadedUser });
      }
    });

    userManager.events.addSilentRenewError(async () => {
      await userManager.removeUser();
      this.setState({ user: null });
    });

    userManager.events.addUserSignedOut(async () => {
      await userManager.removeUser();
      this.setState({ user: null });
    });

    userManager.events.addUserUnloaded(() => {
      this.setState({ user: null });
    });
  }

  async componentDidMount () {
    let user = await this.state.userManager.getUser();
    if (!user) {
      try {
        user = await this.state.userManager.signinSilent();
      } catch (error) {
        console.error('error during silent login', error);
        this.setState({ user: null });
        return;
      }
    }
    this.setState({ user: user });
  }

  async handleCallback () {
    await this.state.userManager.signinRedirectCallback()
      .catch((error) => {
        console.error('error while processing the callback', error);
      });
  }

  handleSilentLogin () {
    this.state.userManager.signinSilent()
      .catch((error) => {
        console.error('error during silent login', error);
      });
  }

  handleSilentCallback () {
    this.state.userManager.signinSilentCallback()
      .catch((error) => {
        console.error('error while processing the silent callback', error);
      });
  }

  handleAuthorization () {
    this.state.userManager.signinRedirect()
      .catch((error) => {
        console.error('error during signing-in', error);
      });
  }

  render () {
    return (
      <AuthContext.Provider
        value={{
          handleAuthorization: this.handleAuthorization,
          handleCallback: this.handleCallback,
          handleSilentLogin: this.handleSilentLogin,
          handleSilentCallback: this.handleSilentCallback,
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
export default AuthContext;
