import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';
import { AuthConsumer } from '../Contexts/AuthContext';
import UserInfo from './UserInfo';
import UserAvatar from './UserAvatar';
import logout from '../Images/logout.svg';
import '../Scss/UIGlobalComponents/UserButton.scss';

const UserButton = () => (
  <AuthConsumer>
    {value => {
      return (
        <UncontrolledButtonDropdown
          className='navbar-nav d-block d-md-flex pb-0 ml-auto dropdown dropdown--nav'
          inNavbar
        >
          <DropdownToggle
            caret
            color='makise-primary'
            className='user-button user-button--mobile-bg-light dropdown-toggle--chevron-down d-flex flex-row align-items-center w-100 text-left pl-3 pr-2 py-2 mt-md-0 border-0 rounded-0'
            data-toggle={'static'}
          >
            <div className='pr-2'>
              <UserAvatar
                avatarHash={value.user.profile['urn:discord:avatar']}
                userId={value.user.profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']}
              />
            </div>
            <div className='pr-2'>
              <UserInfo
                name={value.user.profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']}
                tag={value.user.profile['urn:discord:discriminator']}
              />
            </div>
          </DropdownToggle>
          <DropdownMenu className='w-100 mt-0 border-left-0 border-top-0 border-right-0 dropdown-menu--user-menu'>
            <a href='https://identity.makise.club/connect/endsession' className='dropdown-item__a w-100'>
              <DropdownItem className='text-left dropdown-item--nav pl-3'>
                <img src={logout} alt='logout icon' width='23' className='mr-2' />
                  Logout
              </DropdownItem>
            </a>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      );
    }}
  </AuthConsumer>
);

export default UserButton;
