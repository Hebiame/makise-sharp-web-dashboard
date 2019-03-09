import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import discordLogo from '../Images/discordLogo.svg';
import '../Scss/UIGlobalComponents/LoginButton.scss';

class LoginButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = { loaded: false };
  }

  handleImageLoaded () {
    this.setState({ loaded: true });
  }

  render () {
    return (
      <Link to={`/login`} className={'h-100 ml-auto' + (this.state.loaded ? '' : ' d-none')}>
        <Button
          className='login-button login-button--mobile-bg-light align-items-center border-0 rounded-0 text-left'
          color='makise-primary'
        >
          <div className='login-button__text d-inline-block pt-2 pl-3 pl-md-1'>Login with</div>
          <img
            src={discordLogo}
            className='login-button__discord-logo'
            alt='discord'
            onLoad={this.handleImageLoaded.bind(this)}
          />
        </Button>
      </Link>
    );
  }
}

export default LoginButton;
