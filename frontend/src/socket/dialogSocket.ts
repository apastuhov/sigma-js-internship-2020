import io from 'socket.io-client';
import { IMessage } from '../components/interfaces/Interface';
const ENDPOINT = `${process.env.REACT_SOCKET_URL}`;
const socket = io(ENDPOINT)

export const joinDialog = (dialogId: string) => {
  socket.emit('joinDialog', dialogId);
}

export const leaveRoom = (dialogId: string) => {
  socket.emit('leaveRoom', dialogId);
}

export const sendSocketMessage = (newMessage: IMessage, dialogId: string) => {
  socket.emit('sendMessage', newMessage, dialogId);
}

export const getMessage = (newMessage: any) => {
  socket.on('message', (message: IMessage) => {
    newMessage(message);
  })
}
