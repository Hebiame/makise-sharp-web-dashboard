import React from 'react';
import { AuthConsumer } from '../Contexts/AuthContext';

const SilentCallbackPage = () => (
  <AuthConsumer>
    {({ handleSilentCallback }) => {
      handleSilentCallback();
    }}
  </AuthConsumer>
);

export default SilentCallbackPage;