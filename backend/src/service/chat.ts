import { ChatRepository, chatRepository } from '../data/repository/chat';
import { DTO } from '../interface';

class ChatService {
  constructor(private chatRepo: ChatRepository) {}

  async getMessagesByChatId(chatId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await this.chatRepo.getMessagesByChatId(chatId);
    return data;
  }
}

export const chatService = new ChatService(chatRepository);
