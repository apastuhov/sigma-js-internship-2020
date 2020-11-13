import { ChatRepository, chatRepository } from '../data/repository/chat';
import { DTO } from '../interface';

class ChatService {
  constructor(private chatRepo: ChatRepository) {}

  // GET ALL MESSAGES

  async getMessagesByChatId(chatId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await this.chatRepo.getMessagesByChatId(chatId);
    return data;
  }

  // CREATE NEW MESSAGES

  async setNewMessage(newMessage: DTO.IMessage, dialogId: DTO.ID): Promise<DTO.IMessage> {
    const message = await this.chatRepo.setNewMessage(newMessage, dialogId);
    return message;
  }

  // CREATE DIALOG

  async createDialog(newDialog: DTO.IDialogs): Promise<DTO.IDialogs | null> {
    const filteredDialog = await this.chatRepo.findDialogByParticipants(newDialog);
    if (filteredDialog === null) {
      const dialog = await this.chatRepo.createDialog(newDialog);
      return dialog;
    }
    return filteredDialog;
  }

  // GET ALL DIALOGS

  async getAllDialogs(userId: DTO.ID): Promise<DTO.IDialogs[]> {
    const dialogs = await this.chatRepo.getAllDialogs(userId);
    return dialogs;
  }
}

export const chatService = new ChatService(chatRepository);
