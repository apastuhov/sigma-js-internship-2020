import React from 'react';
import { IUserPhotoProps } from '../../interfaces/Interface';
import './userPhoto.scss';

export const UserPhoto: React.FC<IUserPhotoProps> = (props) => {
  return (
    <div className="user-photo">
      <img src={props.photo} alt="User avatar" />
      {props.isOnline ? <span className="online-status"></span> : null}
    </div>
  );
};
