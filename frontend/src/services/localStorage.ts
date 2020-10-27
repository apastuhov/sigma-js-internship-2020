export const saveUserToStorage = (user = {}) => {
  localStorage.setItem('loginedUser', JSON.stringify(user));
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('loginedUser')!)
}
