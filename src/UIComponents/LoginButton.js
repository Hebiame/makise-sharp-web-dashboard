import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import discordLogo from '../Images/discordLogo.svg';

const LoginButton = () => (
  <Link to={`/login`} className='h-100 ml-auto'>
    <Button
      className='login-link align-items-center border-0 rounded-0 text-left'
      color='makise-primary'
    >
      <div className='d-inline-block pt-2 pl-3 pl-md-1'>Login with</div>
      <img className='' src={discordLogo} id='discord' alt='' />
    </Button>
  </Link>
);

export default LoginButton;