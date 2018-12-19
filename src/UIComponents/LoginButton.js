import React, { Component } from 'react';
import '../Scss/LoginButton.scss';
import { AuthConsumer } from '../Components/AuthContext';

class LoginButton extends Component {

  render() {
    return (
      <AuthConsumer>
        {({ redirect }) => (
          <button className="align-items-center" onClick={redirect}>
            <div className='d-inline'>Login with</div><img className="" src="/img/discordLogo.svg" id="discord" alt=""/>
          </button>
        )}
      </AuthConsumer>
    );
  }

}

export default LoginButton;