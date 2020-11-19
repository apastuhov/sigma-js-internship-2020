import io from 'socket.io-client';
import { IMessage } from '../components/interfaces/Interface';

const ENDPOINT = `${process.env.REACT_APP_SOCKET_URL}`;
const socket = io(ENDPOINT);
let stable = false;

export const onConnect = (userId: string) => {
  if (userId && !stable) {
    socket.emit('stabilizeConnection', userId);
    stable = true;
  }
};

export const joinDialog = (dialogId: string) => {
  socket.emit('joinDialog', dialogId);
};

export const leaveRoom = (dialogId: string) => {
  socket.emit('leaveRoom', dialogId);
};

export const sendSocketMessage = (newMessage: IMessage, dialogId: string) => {
  socket.emit('sendMessage', newMessage, dialogId);
};

export const getMessage = (newMessage: any) => {
  socket.on('message', (message: IMessage) => {
    newMessage(message);
  });
};

export const updateDialog = (updateDialogs: any) => {
  socket.on('updateDialog', (message: IMessage, dialogId: string) => {
    updateDialogs(message, dialogId);
  });
};
