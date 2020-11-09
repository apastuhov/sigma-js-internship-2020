import axios from 'axios';
import { saveUserToStorage } from './localStorageService';

const url = 'http://localhost:8000';

export const processGoogleResponse = (res: any) => {
  return axios({
    method: 'POST',
    url: `${url}/api/googleLogin`,
    data: { tokenID: res.tokenId }
  }).then(res => {
    const user = res.data;
    if (user._id) {
      saveUserToStorage(user);
      return user;
    }
    saveUserToStorage({});
    return null;
  });
};
