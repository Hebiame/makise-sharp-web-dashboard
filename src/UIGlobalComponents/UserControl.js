import React from 'react';
import { AuthConsumer } from '../Contexts/AuthContext';
import LoginButton from './LoginButton';
import { css } from '@emotion/core';
import LoadingSpinner from './LoadingSpinner';
import UserButton from './UserButton';
import '../Scss/UIGlobalComponents/UserControl.scss';

const UserControl = () => (
  <AuthConsumer>
    {value => {
      if (value.user) {
        return <UserButton />;
      } else if (typeof value.user === 'undefined') {
        return (
          <div className='pl-3 pt-2 pt-md-0 ml-md-auto mt-md-2 mr-md-5 pr-md-3 spinner--user-control'>
            <LoadingSpinner css={css`box-sizing: content-box;`} />
          </div>
        );
      } else {
        return <LoginButton />;
      }
    }}
  </AuthConsumer>
);

export default UserControl;
