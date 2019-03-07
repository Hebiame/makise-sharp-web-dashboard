import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import space from '../Images/space.svg';
import '../Scss/NotFoundPage.scss';

const NotFound = () => (
  <main className='notfound-page bg-white justify-content-center d-flex align-items-center'>
    <div className='col-12 col-md-6 text-center text-md-left'>
      <img src={space} className='d-md-none' alt='not found' />
      <h1 className='mt-3 mt-md-0'>Hmm.</h1>
      <p className=''>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
      <Link to='/'>
        <Button color='makise-primary ml-0 px-2 py-1 py-md-2 px-md-3 text-uppercase'>Help me out</Button>
      </Link>
    </div>
    <div className='d-none d-md-inline-block col-md-6 text-center'><img src={space} alt='not found' /></div>
  </main>
);

export default NotFound;
