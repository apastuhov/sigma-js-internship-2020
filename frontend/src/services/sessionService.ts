import { onConnect } from './../socket/dialogSocket';
import axios from 'axios';
import { saveUserToStorage } from './sessionStorageService';

const url = `${process.env.REACT_APP_API_URL}`;

export const processGoogleResponse = (res: any) => {
  return axios({
    method: 'POST',
    url: `${url}/googleLogin`,
    data: { tokenID: res.tokenId }
  }).then(res => {
    const user = res.data;
    if (user._id) {
      saveUserToStorage(user);
      onConnect(user._id);
      return user;
    }
    return null;
  });
};
