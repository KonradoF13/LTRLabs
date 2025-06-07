import {Socket} from 'phoenix';
import {SOCKET_API} from './socket.constants';
import {SocketProps} from './socket.types';

export const connectSocket = ({token}: SocketProps) => {
  const socket = new Socket(SOCKET_API, {
    params: {token},
  });

  socket.connect();

  const channel = socket.channel('games:lobby', {});

  const disconnect = () => {
    channel.leave();
    socket.disconnect();
  };

  return {channel, disconnect};
};
