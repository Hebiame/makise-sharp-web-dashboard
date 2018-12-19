import React, { Component } from 'react';
import { AuthConsumer } from '../Components/AuthContext';
import LoginButton from './LoginButton';
import '../Scss/Navbar.scss';


class Navbar extends Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md pl-4 pr-4 py-3">
          <a className="navbar-brand" href="/">
            <img src="/img/logo.svg" className="logo d-none d-md-block" alt=""/>
            <img src="/img/logo-mobile.svg" className="logo d-block d-md-none" alt=""/>
          </a>
          <AuthConsumer>
            {({ authorized }) => (
              <div className="ml-auto">
                {authorized ? (
                  <div></div>
                ) : (
                  <LoginButton />
                )}
              </div>
            )}
          </AuthConsumer>
        </nav>
      </header>
    );
  }

}

export default Navbar;