import React from 'react';
import Layout from '../../UIComponents/Layout';
import RandomDescription from "./RandomDescription";

const Start = () => (
  <Layout>
    <main className='start-page container-fluid'>
      <div className='row h-100 align-items-center'>
        <section className='text-center col-md-8 offset-md-4 header-text'>
          <h1>Lorem ipsum</h1>
          <RandomDescription/>
        </section>
      </div>
    </main>
  </Layout>
);

export default Start;