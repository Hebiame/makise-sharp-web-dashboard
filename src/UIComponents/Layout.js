import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Scss/Layout.scss';
import UserControl from './UserControl';
import logo from '../Images/logo.svg';
import logoMobile from '../Images/logo-mobile.svg';

export default class Layout extends Component {
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
          <Navbar color='makise-primary' dark expand='md' className='fixed-top p-0'>
            <Link to={`/`} className='navbar-brand py-2 pl-3 pl-md-5'>
              <img src={logo} className='logo d-none d-md-block' alt='logo' />
              <img src={logoMobile} className='logo d-block d-md-none' alt='logo' />
            </Link>
            <NavbarToggler onClick={this.toggle} />
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
