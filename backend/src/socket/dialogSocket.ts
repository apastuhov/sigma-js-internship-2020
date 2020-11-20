import { Types } from 'mongoose';
import { DTO } from '../interface';
import { chatService } from '../service/chat';
import { userService } from '../service/user';

export const joinDialog = (socket: any) => {
  socket.on('joinDialog', (dialogId: string) => {
    socket.join(dialogId);
  });
};

export const sendMessage = (socket: any, io: any) => {
  socket.on('sendMessage', async (newMessage: DTO.IMessage, dialogId: string) => {
    let message = await chatService.setNewMessage(newMessage, Types.ObjectId(dialogId));
    io.to(dialogId).emit('message', message);
    updateParticipants(message, dialogId, io);
  });
};

const updateParticipants = async (message: DTO.IMessage, dialogId: string, io: any) => {
  const dialog = await chatService.findDialogById(Types.ObjectId(dialogId));
  const user = await userService.getUserById(message.userId);

  const participants = dialog?.participants.filter(users => users != message.userId);
  for (const userId of participants!) {
    io.to(userId.toString()).emit('updateDialog', message, dialogId, user);
  }
};

export const leaveRoom = (socket: any) => {
  socket.on('leaveRoom', (dialogId: string) => {
    socket.leave(dialogId);
  });
};
