import { dataType } from '../components/interfaces/Interface';
import { getRequest } from './apiService';

export const getChatMessages = (id: string) => getRequest(`${dataType.dialogs}/${id}`);
