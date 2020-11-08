export const saveUserToStorage = (user = {} || null) => {
  localStorage.setItem('loginedUser', JSON.stringify(user));
};

export const saveFriendsToStorage = (friends = {}) => {
  console.log('save');
  localStorage.setItem('friends', JSON.stringify(friends));
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('loginedUser')!);
};

interface friend {
  _id: string;
}

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
