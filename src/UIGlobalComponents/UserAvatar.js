import React from 'react';

function makeAvatarUrl (hash, userId) {
  return 'https://cdn.discordapp.com/avatars/' + userId + '/' + hash + '.png';
}

const UserAvatar = (props) => (
  <img src={makeAvatarUrl(props.avatarHash, props.userId)} alt='avatar' className='user-button__avatar' />
);

export default UserAvatar;
