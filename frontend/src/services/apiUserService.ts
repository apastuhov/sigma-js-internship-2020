import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

const getRequest = (url: string) => axios.get(`${url}`).then(res => res.data);

const postRequest = (url: string, body: any) => {
  axios.post(`${url}`, body)
  .then(res => {
    return res.data;
  })
  .catch(e => {
    return e;
  })
}


export const getUserDetails = (id: number) => getRequest(`${dataType.user}/${id}`)
export const getUserPosts = (id: number) => getRequest(`${dataType.user}/${id}/${dataType.posts}`)
export const sendPostToUser = (id: any, body: {}) => postRequest(`${dataType.user}/${id}/${dataType.posts}`, body)

