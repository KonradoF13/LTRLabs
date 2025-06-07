import {login} from '@/config/api/auth';
import {LoginProps} from '@/config/api/auth.types';
import {connectSocket} from '@/config/socket/socket';
import {SocketAnnouncementResponse} from '@/config/socket/socket.types';
import {useState, useEffect, useRef} from 'react';

export const useAuthWithSocket = () => {
  const [announcement, setAnnouncement] =
    useState<SocketAnnouncementResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const disconnectSocket = useRef<(() => void) | null>(null);

  const onLoginAndConnect = async (data: LoginProps) => {
    setLoading(true);
    setErrorMessage(null);
    setAnnouncement(null);

    try {
      const loginToken = await login(data);
      //W komercyjnym projekcie przechowywałbym token w MMKV lub AsyncStorage
      // by po restarcie apki użytkownik wciąż był zalogowany.

      const {channel, disconnect} = connectSocket({token: loginToken});

      disconnectSocket.current = disconnect;

      channel.join().receive('error', () => {
        setErrorMessage('Failed to join channel');
      });

      channel.on('announcement', (payload: SocketAnnouncementResponse) => {
        setAnnouncement(payload);
      });
    } catch (error: unknown) {
      const apiErrorMessage =
        error instanceof Error ? error.message : 'An error occurred';

      setErrorMessage(apiErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (disconnectSocket.current) {
        disconnectSocket.current();
      }
    };
  }, [disconnectSocket]);

  return {
    announcement,
    errorMessage,
    loading,
    onLoginAndConnect,
  };
};
