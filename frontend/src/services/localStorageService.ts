export const saveUserToStorage = (user = {} || null) => {
	localStorage.setItem('loginedUser', JSON.stringify(user));
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('loginedUser')!);
}

export const clearStorage = () => {
	localStorage.clear();
}