import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import { getUsers } from '../../../services/getUsers';
import './friends.scss';

const Friends: React.FC = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getUsers(`http://127.0.0.1:8000/api/users`).then(users => setFriends(users));
  }, []);

  return (
    <Layout pageTitle="Friends" countFriends={friends.length}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
