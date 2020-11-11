export const saveUserToStorage = (user = {} || null) => {
  localStorage.setItem('loginedUser', JSON.stringify(user));
};

export const saveFriendsToStorage = (friends: Set<string>) => {
  localStorage.setItem('friends', JSON.stringify(Array.from(friends)));
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('loginedUser')!);
};

export const getFriendsFromStorage = () => {
  const friends = JSON.parse(localStorage.getItem('friends')!);
  return friends;
};

export const clearStorage = () => {
  localStorage.clear();
};
