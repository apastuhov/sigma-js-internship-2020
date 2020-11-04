import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import { getFriends } from '../../../services/apiFriends';
import './friends.scss';

interface MatchParams {
  id: number & string;
}

const Friends: React.FC = () => {
  const [friends, setFriends] = useState([]);
  const {id} = useParams<MatchParams>();

  useEffect(() => {
    getFriends(id).then(users => setFriends(users));
  }, []);

  return (
    <Layout pageTitle="Friends" countFriends={friends.length}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
