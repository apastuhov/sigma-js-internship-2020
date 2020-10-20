import React from 'react';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';
import { UserPhotoInfo } from '../../interfaces/Interface';

export const UserPhoto: React.FC<UserPhotoInfo> = ({ photoInfo }) => {
  return (
    <div className="user-photo">
      <img src={Avatar} alt="User avatar" />
      {photoInfo.isOnline === true ? <span className="online-status"></span> : null}
    </div>
  );
};
