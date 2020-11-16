import { IUser } from '../components/interfaces/Interface';

export const saveUserToStorage = (user: IUser) => {
  sessionStorage.setItem('loginedUser', JSON.stringify(user));
};

export const saveFriendsToStorage = (friends: Set<string>) => {
  sessionStorage.setItem('friends', JSON.stringify(Array.from(friends)));
};

export const getUserFromStorage = () => {
  return JSON.parse(sessionStorage.getItem('loginedUser') as string);
};

export const getFriendsFromStorage = () => {
  const friends = JSON.parse(sessionStorage.getItem('friends') as string);
  return friends;
};

export const isCurrentUser = (id?: string) => {
  const user = getUserFromStorage();
  return user?._id === id;
};

export const clearStorage = () => {
  sessionStorage.clear();
};
