import { DTO } from '../../interface';
import { Dialog } from '../models/dialog';

export class ChatRepository {
  async getMessagesByChatId(dialogId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await Dialog.findById(dialogId).populate('messages');
    return data;
  }
  
  async getAllDialogs(ID: DTO.ID): Promise<DTO.IDialogs[]> {
    const dialogs = await Dialog.find({ participants: ID }).populate([{ path: 'participants', select: ['firstName', 'lastName', 'avatar'] }, { path: 'messages', options: { limit: 1 } }])
    console.log(dialogs)
    return dialogs;
  } 
}

export const chatRepository = new ChatRepository();
