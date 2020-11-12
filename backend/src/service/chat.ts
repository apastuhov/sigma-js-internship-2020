import { ChatRepository, chatRepository } from '../data/repository/chat';
import { DTO } from '../interface';

class ChatService {
  constructor(private chatRepo: ChatRepository) {}

  async getMessagesByChatId(chatId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await this.chatRepo.getMessagesByChatId(chatId);
    return data;
  }

  async getAllDialogs(userId: DTO.ID): Promise<DTO.IDialogs[]> {
    const dialogs = await this.chatRepo.getAllDialogs(userId);
    return dialogs;
  }
}

export const chatService = new ChatService(chatRepository);
