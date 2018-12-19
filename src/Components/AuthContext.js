import React, { Component } from 'react';
import RandomStringGenerator from '../Utils/RandomStringGenerator'

const AuthContext = React.createContext();
const DiscordAuthLink = "https://discordapp.com/api/oauth2/authorize?client_id=289512616559378432&redirect_uri=http%3A%2F%2F109.200.92.6%3A25565%2Fdashboard%2flogin&response_type=code&scope=identify";
const Generator = new RandomStringGenerator('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 55);

class AuthProvider extends Component {

  state = {
    authorized: false,
    stateCode: Generator.generate(),
    accessToken: ''
  };

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.revokeAuthorization = this.revokeAuthorization.bind(this);
    this.handleAuthorization = this.handleAuthorization.bind(this);
  }

  redirect() {
    window.location.assign(DiscordAuthLink + '&state=' + this.state.stateCode);
  }

  revokeAuthorization() {
    this.setState({
      authorized: false,
      stateCode: Generator.generate(),
      accessToken: ''
    });
  }

  handleAuthorization(hash) {

  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          authorized: this.state.authorized,
          stateCode: this.state.stateCode,
          accessToken: this.state.accessToken,
          redirect: this.redirect,
          revoke: this.revokeAuthorization,
          handleAuthorization: this.handleAuthorization
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };