import React, { useState, useContext, useEffect } from 'react';
import { getFriendsFromStorage, getUserFromStorage, saveFriendsToStorage } from '../../../services/localStorageService';
import { getFriends } from '../../../services/apiUserService';
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
  const user = getUserFromStorage();

  const friendsFromStorage = getFriendsFromStorage();

  const addFriendToContext = (id: string) => {
    setFriends(arr => new Set(arr.add(id)));
  };

  useEffect(() => {
    if (friendsFromStorage) {
      setFriends(new Set(friendsFromStorage));
    } else {
      getFriends(user._id).then(users => setFriends(new Set(users.map((user: IUser) => user._id))));
    }
  }, []);

  useEffect(() => {
    saveFriendsToStorage(friends);
  }, [friends]);

  return <friendsContext.Provider value={{ friends, addFriendToContext }}>{children}</friendsContext.Provider>;
};

export const useFriends = () => useContext(friendsContext);
