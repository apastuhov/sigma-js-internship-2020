import { dataType } from '../components/interfaces/Interface';
import { getRequest } from './apiService';
import { postRequest } from './apiService';

export const createDialog = (body: {}) => postRequest(`${dataType.user}/${dataType.chat}`, body);
export const getChatMessages = (id: string) => getRequest(`${dataType.chat}/${id}`);
export const getAllDialogs = (id: string) => getRequest(`${dataType.chat}/${id}/${dataType.dialogs}`);
