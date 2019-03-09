import React from 'react';
import Layout from '../../UIGlobalComponents/Layout';
import RandomDescription from './RandomDescription';
import '../../Scss/Pages/Home.scss';

const HomePage = () => (
  <Layout>
    <main className='start-page container-fluid'>
      <div className='row h-100 align-items-center'>
        <section className='text-center col-md-8 offset-md-4 start-page__header'>
          <h1 className='start-page__title text-makise-secondary'>Lorem ipsum</h1>
          <p className='start-page__description text-makise-secondary'><RandomDescription /></p>
        </section>
      </div>
    </main>
  </Layout>
);

export default HomePage;
