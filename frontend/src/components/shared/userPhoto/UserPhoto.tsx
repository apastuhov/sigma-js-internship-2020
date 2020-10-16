import React from 'react';
import Avatar from '../../mocks/user.png';
import './userPhoto.scss';

type UserPhotoProps = {
  online: boolean,
  photoUrl: string
}

export const UserPhoto: React.FC<UserPhotoProps> = (props) => {
  return (
    <div className="user-photo">
      <img src={Avatar} alt="photo of user" />
      {props.online === true
        ? <span className="online-status"></span>
        : null}
    </div>
  )
}