import React from 'react';
import { UserPhotoInfo } from '../../interfaces/Interface';
import './userPhoto.scss';

export const UserPhoto: React.FC<UserPhotoInfo> = (photoInfo) => {
  return (
    <div className="user-photo">
      <img src={photoInfo.photoUrl} alt="User avatar" />
      {photoInfo.isOnline ? <span className="online-status"></span> : null}
    </div>
  );
};
