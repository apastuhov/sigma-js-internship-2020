import React, { useContext, useEffect, useState } from 'react';
import { getFriends } from '../../../services/apiUserService';
import {
  getFriendsFromStorage,
  getUserFromStorage,
  saveFriendsToStorage
} from '../../../services/sessionStorageService';
import { IUser } from '../../interfaces/Interface';

// TODO
// service, that update context
// handle update
// initial values from session storage
// array to Set

type InitialStateType = {
  friends: Set<string>;
  addFriendToContext: (id: string) => void;
};

const initialState: InitialStateType = {
  friends: new Set<string>(),
  addFriendToContext: (id: string) => {}
};

type Props = {
  children: React.ReactNode;
};

export const friendsContext = React.createContext(initialState);

export const FriendsProvider = ({ children }: Props) => {
  const [friends, setFriends] = useState<Set<string>>(new Set([]));

  const addFriendToContext = (id: string) => {
    setFriends(arr => new Set(arr.add(id)));
  };

  useEffect(() => {
    const user = getUserFromStorage();
    const friendsFromStorage = getFriendsFromStorage();
    if (friendsFromStorage) {
      setFriends(new Set(friendsFromStorage));
    } else {
      if (user?._id) {
        getFriends(user._id).then(users => setFriends(new Set(users.map((user: IUser) => user._id))));
      }
    }
  }, []);

  useEffect(() => {
    saveFriendsToStorage(friends);
  }, [friends]);

  return <friendsContext.Provider value={{ friends, addFriendToContext }}>{children}</friendsContext.Provider>;
};

export const useFriends = () => useContext(friendsContext);
