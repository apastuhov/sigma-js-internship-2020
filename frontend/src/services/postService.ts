import { dataType } from '../components/interfaces/Interface';
import { getRequest, postRequest } from './apiService';

export const getUserPosts = (id: number) => getRequest(`${dataType.user}/${id}/${dataType.posts}`);
export const sendPostToUser = (id: any, body: {}) => postRequest(`${dataType.user}/${id}/${dataType.posts}`, body);
