import { dataType } from '../components/interfaces/Interface';
import { getRequest, postRequest } from './apiService';

export const getUserPosts = (id?: string) => getRequest(`${dataType.user}/${id}/${dataType.posts}`);
export const sendPostToUser = (id: string, body: {}) => postRequest(`${dataType.user}/${id}/${dataType.posts}`, body).then(res => res);
