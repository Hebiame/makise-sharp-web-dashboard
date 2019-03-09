import React from 'react';
import { AuthConsumer } from '../Contexts/AuthContext';

const SilentLoginPage = () => (
  <AuthConsumer>
    {({ handleSilentLogin }) => {
      handleSilentLogin();
    }}
  </AuthConsumer>
);

export default SilentLoginPage;
