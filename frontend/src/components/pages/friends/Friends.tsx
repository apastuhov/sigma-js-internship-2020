import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFriends } from '../../../services/apiUserService';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import { getFriends } from '../../../services/apiUserService';
import { Context } from '../../storage/context';
import './friends.scss';
import { Types } from '../../storage/reducers';
import { IUser } from '../../interfaces/Interface';

interface MatchParams {
  id: number & string;
}

const Friends: React.FC = () => {
  const [friends, setFriends] = useState([]);
  const { state, dispatch } = useContext(Context);
  const { id } = useParams<MatchParams>();
  //dispatch({type: Types.Get, payload: {...users}})console.log(users)
  // {
  //   _id: "31231",
  //   firstName: 'Serhii',
  //   lastName: 'Kaliuzhnyi',
  //   country: 'Ukraine',
  //   countryCode: 'UK',
  //   speak: [{language: 'Turkish', level:'Advanced'}],
  //   learn: [{language: 'Turkish', level:'Advanced'}],
  //   birthday: new Date("1997-01-31T00:00:00.000Z"),
  //   avatar: "standard"
  // }
  useEffect(() => {
    getFriends(id).then(users =>
      users.map((user: IUser) => {
        dispatch({ type: Types.Get, payload: { ...user } });
      })
    );
  }, []);
  console.log(state);
  return (
    <Layout pageTitle="Friends" countFriends={friends.length}>
      <UserList users={friends} />
    </Layout>
  );
};

export default Friends;
