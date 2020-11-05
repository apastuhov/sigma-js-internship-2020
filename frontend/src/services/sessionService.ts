import axios from 'axios';
import { saveUserToStorage } from './localStorageService';

const url = 'http://localhost:8000';

export const handleGoogleResponse = async (res: any) => {
  await axios({
    method: 'POST',
    url: `${url}/api/googleLogin`,
    data: { tokenID: res.tokenId }
  }).then(res => {
    const user = res.data;
    saveUserToStorage(user);
  });
};
