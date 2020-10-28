import React from 'react';
import { UserPhotoInfo } from '../../interfaces/Interface';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';

export const UserPhoto: React.FC<UserPhotoInfo> = (photoInfo) => {
  return (
    <div className="user-photo">
      <img src={photoInfo.photoUrl || Avatar} alt="User avatar" />
      {photoInfo.isOnline === true ? <span className="online-status"></span> : null}
    </div>
  );
};
