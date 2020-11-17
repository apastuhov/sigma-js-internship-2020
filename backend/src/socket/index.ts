import { FRONTEND_SERVER_FOR_CORS } from '../constant';
import { joinDialog, sendMessage, leaveRoom } from './dialogSocket';

export const initSocket = (server: any) => {

  const io = require("socket.io")(server, {
    cors: {
      origin: FRONTEND_SERVER_FOR_CORS,
    },
  });

  io.on('connection', (socket: any) => {
    joinDialog(socket);
    sendMessage(socket, io);
    leaveRoom(socket);
  });
}