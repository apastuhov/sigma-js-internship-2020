import { DTO } from '../interface';
import { chatService } from '../service/chat';
import { Types } from 'mongoose';

export const joinDialog = (socket: any) => {
  socket.on('joinDialog', (dialogId: string) => {
    socket.join(dialogId);
  });
};

export const sendMessage = (socket: any, io: any) => {
  socket.on('sendMessage', async (newMessage: DTO.IMessage, dialogId: string) => {
    let message = await chatService.setNewMessage(newMessage, Types.ObjectId(dialogId));
    io.to(dialogId).emit('message', message);
  });
};

export const leaveRoom = (socket: any) => {
  socket.on('leaveRoom', (dialogId: string) => {
    socket.leave(dialogId);
  });
};
