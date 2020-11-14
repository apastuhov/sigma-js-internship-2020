import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

const getRequest = (url: string) => axios.get(`${url}`).then(res => res.data);

export const postRequest = (url: string, body: any) => {
  return axios
    .post(`${url}`, body)
    .then(res => res.data)
    .catch(e => e);
};

export const patchRequest = (url: string, body: any) => {
  return axios
    .patch(`${url}`, body)
    .then(res => res.data)
    .catch(e => e);
};

export const getFriends = async (id?: string) => {
  try {
    const res = await axios.get(`${dataType.user}/${id}/friends`);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addFriendToDB = async (id: string, friendID: object) => {
  try {
    const res = await axios.patch(`${dataType.user}/${id}/friends`, friendID);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserDetails = (id?: string) => {
  return getRequest(`${dataType.user}/${id}`);
}
