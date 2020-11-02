import React from 'react';
import { IUserPhotoProps } from '../../interfaces/Interface';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';


export const UserPhoto: React.FC<IUserPhotoProps> = photoInfo => {
  function checkURL(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null || url.startsWith('blob:');
  }
  return (
    <div className="user-photo">
      <img src={checkURL(photoInfo.photoUrl) ? photoInfo.photoUrl : Avatar} alt="User avatar" />
      {photoInfo.isOnline ? <span className="online-status"></span> : null}
    </div>
  );
};
