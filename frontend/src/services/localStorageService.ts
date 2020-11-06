export const saveUserToStorage = (user = {} || null) => {
  localStorage.setItem('loginedUser', JSON.stringify(user));
};

export const saveFriendsToStorage = (friends = []) => {
  console.log('save', JSON.stringify(friends), friends);
  localStorage.setItem('friends', JSON.stringify(friends));
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('loginedUser')!);
};

export const getFriendsFromStorage = () => {
  const friends = JSON.parse(localStorage.getItem('friends') || '[]');
  if (!friends.length) {
    return [];
  }
  return friends;
};

export const clearStorage = () => {
  localStorage.clear();
};
