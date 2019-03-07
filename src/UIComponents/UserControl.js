import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';
import { AuthConsumer } from '../Components/AuthContext';
import LoginButton from './LoginButton';
import UserInfo from './UserInfo';
import UserAvatar from './UserAvatar';
import logout from '../Images/logout.svg';
import { css } from '@emotion/core';
import LoadingSpinner from './LoadingSpinner';

const UserControl = () => (
  <AuthConsumer>
    {value => {
      if (value.user) {
        return (
          <UncontrolledButtonDropdown className='navbar-nav d-block d-md-flex pb-0 ml-auto dropdown' inNavbar >
            <DropdownToggle
              caret
              color='makise-primary'
              className='d-inline-block w-100 text-left pl-3 pr-2 pt-1 mt-md-0 border-0 rounded-0'
              data-toggle={'static'}
            >
              <div className='d-inline-block pr-2'>
                <UserAvatar
                  avatarHash={value.user.profile['urn:discord:avatar']}
                  userId={value.user.profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']}
                />
              </div>
              <div className='d-inline-block pr-2 user-name'>
                <UserInfo
                  name={value.user.profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']}
                  tag={value.user.profile['urn:discord:discriminator']}
                />
              </div>
            </DropdownToggle>
            <DropdownMenu className='w-100 border-left-0 border-top-0 border-right-0'>
              <a href='https://identity.makise.club/connect/endsession' className='w-100'>
                <DropdownItem className='text-left'>
                  <img src={logout} alt='logout icon' width='23' className='mr-2' />
                  Logout
                </DropdownItem>
              </a>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        );
      } else if (typeof value.user === 'undefined') {
        return (
          <div className='ml-auto mt-2 mr-5 pr-3'>
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
