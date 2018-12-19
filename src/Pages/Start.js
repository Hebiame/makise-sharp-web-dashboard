import React from 'react';
import HomePage from './Home';
import { AuthConsumer } from "../Components/AuthContext";

const Start = () => {
  return(
    <AuthConsumer>
      {({ authorized }) =>
        authorized ? (
          <HomePage/>
          ) : (
            <div></div>
          )
      }
    </AuthConsumer>
  )
}

export default Start;