import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';
import { getRequest } from './apiService';

export const getFriends = async (id: string) => {
  try {
    const res = await axios.get(`${dataType.user}/${id}/friends`);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addFriend = async (id: string, friendID: object) => {
  try {
    const res = await axios.patch(`${dataType.user}/${id}/friends`, friendID);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
}

export const getUserDetails = (id: number) => getRequest(`${dataType.user}/${id}`);
