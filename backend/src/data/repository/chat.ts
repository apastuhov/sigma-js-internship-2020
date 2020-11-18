import { DTO } from '../../interface';
import { Dialog } from '../models/dialog';
import { Message } from '../models/message';

export class ChatRepository {
  // GET ALL MESSAGES

  async getMessagesByChatId(dialogId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const data = await Dialog.findById(dialogId).populate('messages');
    return data;
  }

  // CREATE NEW MESSAGE

  async setNewMessage(newMessage: DTO.IMessage, dialogId: DTO.ID): Promise<DTO.IMessage> {
    const message = await new Message(newMessage).save();
    await this.putToDialog(message, dialogId);
    return message;
  }

  async putToDialog(message: DTO.IMessage, dialogId: DTO.ID): Promise<DTO.IDialogs> {
    const data = await Dialog.updateOne({ _id: dialogId }, { $push: { messages: message } });
    return data;
  }

  // FIND DIALOG BY PARTICIPANTS

  async findDialogByParticipants(newDialog: DTO.IDialogs): Promise<DTO.IDialogsDoc | null> {
    const res = await Dialog.findOne({
      participants: {
        $all: newDialog.participants
      }
    });
    return res;
  }

  // CREATE DIALOG

  async createDialog(newDialog: DTO.IDialogs): Promise<DTO.IDialogs> {
    const dialog = new Dialog(newDialog);
    const res = await dialog.save(function (err, dialog) {
      if (err) return console.error(err);
      return dialog;
    });
    return res;
  }

  // GET ALL DIALOGS

  async getAllDialogs(ID: DTO.ID): Promise<DTO.IDialogs[]> {
    const dialogs = await Dialog.find({ participants: ID }).populate([
      { path: 'participants', select: ['firstName', 'lastName', 'avatar'] },
      { path: 'messages', options: { limit: 1 } }
    ]);
    return dialogs;
  }

  // FIND DIALOG BY ID

  async findDialogById(dialogId: DTO.ID): Promise<DTO.IDialogsDoc | null> {
    const dialog = await Dialog.findById(dialogId);
    return dialog;
  }
}

export const chatRepository = new ChatRepository();
