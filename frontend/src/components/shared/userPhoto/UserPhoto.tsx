import React from 'react';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';

type UserPhotoProps = {
  isOnline: boolean;
  photoUrl: string;
};

export const UserPhoto: React.FC<UserPhotoProps> = props => {
  return (
    <div className="user-photo">
      <img src={Avatar} alt="User avatar" />
      {props.isOnline === true ? <span className="online-status"></span> : null}
    </div>
  );
};
