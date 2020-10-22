import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import apiService from '../../../services/apiService';
import { dataType } from '../../interfaces/Interface';
import './friends.scss';

const Friends: React.FC = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    apiService(dataType.users).then(users => setFriends(users));
  }, []);

  return (
    <Layout pageTitle="Friends" countFriends={friends.length}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
