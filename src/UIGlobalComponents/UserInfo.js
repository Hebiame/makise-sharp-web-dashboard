import React from 'react';

const UserInfo = (props) => (
  <ul className='list-unstyled mb-0'>
    <li className='user-button__name'>{props.name}</li>
    <li className='user-button__tag'>{'#' + props.tag}</li>
  </ul>
);

export default UserInfo;
