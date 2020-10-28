import React from 'react';
import { UserCard } from '../../shared/userCard/UserCard';
import { IUsers } from '../../interfaces/Interface';
import './userList.scss';

const UserList: React.FC<IUsers> = ({ users }) => {
  return (
    <ul>
      {users.map(item => (
        <li key={item.id}>
          <UserCard mainInfo={item} boxShadow={2} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
