import React from 'react';

const UserInfo = (props) => (
  <ul className='list-unstyled d-inline-block text-left'>
    <li>{props.name}</li>
    <li>{'#' + props.tag}</li>
  </ul>
);

export default UserInfo;
