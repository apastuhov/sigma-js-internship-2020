import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

const getRequest = (url: string) => axios.get(`${url}`).then(res => res.data);

export const getUserDetails = (id: number) => getRequest(`${dataType.user}/${id}`)
export const getUserPosts = (id: number) => getRequest(`${dataType.user}/${id}/${dataType.posts}`)