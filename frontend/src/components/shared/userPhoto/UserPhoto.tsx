import React from 'react';
import { IUserPhotoProps } from '../../interfaces/Interface';
import './userPhoto.scss';

export const UserPhoto: React.FC<IUserPhotoProps> = ({ avatar, isOnline }) => {
  return (
    <div className="user-photo">
      <img src={avatar} alt="User avatar" />
      {isOnline && <span className="online-status"></span>}
    </div>
  );
};
