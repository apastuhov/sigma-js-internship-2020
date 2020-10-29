import React from 'react';
import { IUserPhotoProps } from '../../interfaces/Interface';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';

export const UserPhoto: React.FC<IUserPhotoProps> = (props) => {
  return (
    <div className="user-photo">
      <img src={Avatar} alt="User avatar" />
      {props.isOnline ? <span className="online-status"></span> : null}
    </div>
  );
};
