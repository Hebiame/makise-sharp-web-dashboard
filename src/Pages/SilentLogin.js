import React from 'react';
import { AuthConsumer } from '../Components/AuthContext';

const SilentLoginPage = () => (
  <AuthConsumer>
    {({ handleSilentLogin }) => {
      handleSilentLogin();
    }}
  </AuthConsumer>
);

export default SilentLoginPage;
