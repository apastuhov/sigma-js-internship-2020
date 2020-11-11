import { DTO } from '../../interface';
import { Dialog } from '../models/dialog';

export class ChatRepository {
  async getMessagesByChatId(dialogId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await Dialog.findById(dialogId).populate('messages');
    return data;
  }
}

export const chatRepository = new ChatRepository();
