import React from 'react';
import { UserCard } from '../../shared/userCard/UserCard';
import './profile.scss';

const Profile: React.FC = () => {
  return (
    <div className="container">
      <h1>Profile</h1>
      <UserCard />
    </div>
  );
};

export default Profile;
