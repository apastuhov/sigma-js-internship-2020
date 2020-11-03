import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import { getFriends } from '../../../services/apiFriends';
import './friends.scss';

const Friends: React.FC = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFriends().then(users => setFriends(users));
  }, []);

  return (
    <Layout pageTitle="Friends" countFriends={friends.length}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
