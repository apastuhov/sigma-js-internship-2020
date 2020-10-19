import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import getFriends from '../../../services/getFriends';
import './friends.scss';

const Friends: React.FC = () => {
  const [countFriends, setCountFriends] = useState(0);
  const friends = getFriends();

  useEffect(() => {
    setCountFriends(friends.length);
  }, [countFriends]);

  return (
    <Layout pageTitle="Friends" countTiles={countFriends}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
