export const saveUserToStorage = (user = {} || null) => {
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

export const clearStorage = () => {
  sessionStorage.clear();
};
