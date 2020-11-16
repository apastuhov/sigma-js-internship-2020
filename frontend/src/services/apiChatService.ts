import { dataType } from '../components/interfaces/Interface';
import { getRequest, postRequest } from './apiService';

export const createDialog = (body: {}) => postRequest(`${dataType.user}/${dataType.chat}`, body);
export const getChatMessages = (dialogId: string) => getRequest(`${dataType.chat}/${dialogId}`);
export const getAllDialogs = (userId: string) => getRequest(`${dataType.chat}/${userId}/${dataType.dialogs}`);
export const createMessage = (dialogId: string, body: {}) =>
  postRequest(`${dataType.chat}/${dialogId}/${dataType.message}`, body);
