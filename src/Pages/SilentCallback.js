import React from 'react';
import { AuthConsumer } from '../Components/AuthContext';

const SilentCallbackPage = () => (
  <AuthConsumer>
    {({ handleSilentCallback }) => {
      handleSilentCallback();
    }}
  </AuthConsumer>
);

export default SilentCallbackPage;
