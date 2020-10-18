import React from 'react';
import { MainInfo } from '../../interfaces/Interface';
import { UserCard } from '../../shared/userCard/UserCard';
import './userList.scss';

interface IUsers {
  users: MainInfo[];
}

const UserList: React.FC<IUsers> = ({ users }) => {
  return (
    <ul>
      {users.map(item => (
        <li key={item.id}>
          <UserCard user={item} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
