import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Scss/UIGlobalComponents/Layout.scss';
import UserControl from './UserControl';
import logo from '../Images/logo.svg';
import logoMobile from '../Images/logo-mobile.svg';

class Layout extends Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <div className='container-fluid px-0'>
        <header>
          <Navbar color='makise-primary' dark expand='md' className='makise-nav fixed-top p-0'>
            <Link to={`/`} className='navbar-brand py-2 pl-3 pl-md-5'>
              <img src={logo} className='makise-nav__logo d-none d-md-block' alt='logo' />
              <img src={logoMobile} className='makise-nav__logo d-block d-md-none' alt='logo' />
            </Link>
            <NavbarToggler onClick={this.toggle} className='border-0 makise-nav__navbar-toggler' />
            <Collapse isOpen={this.state.isOpen} navbar className='h-100' enter={false} exit={false}>
              <UserControl />
            </Collapse>
          </Navbar>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
