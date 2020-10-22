import React from 'react';
import Layout from '../../shared/layout/Layout';
import User from '../../mocks/user-mock.json';
import { UserCard } from '../../shared/userCard/UserCard';

const Profile: React.FC = () => {
  return (
    <Layout pageTitle="Profile">
      <UserCard user={User} />
    </Layout>
  );
};

export default Profile;
