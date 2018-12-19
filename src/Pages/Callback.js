import React from 'react';
import { Redirect } from "react-router-dom";
import { AuthConsumer } from '../Components/AuthContext';

const Callback = props => (
  <AuthConsumer>
    {({handleAuthorization}) => {
      handleAuthorization(props.location.search);
      return <Redirect to="/"/>;
    }}
  </AuthConsumer>
)

export default Callback

