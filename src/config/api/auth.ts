import axios from 'axios';
import {LoginProps, LoginResponse} from './auth.types';
import {API_URL} from './auth.constants';

export const login = async ({email, password}: LoginProps): Promise<string> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/api/auth/login`,
      {
        email,
        password,
      },
    );

    if (response.data?.success && response.data?.data?.token) {
      return response.data.data.token;
    }

    throw new Error('No token returned');
  } catch (error) {
    const errorMessage =
      axios.isAxiosError(error) && error.response?.data?.error?.message
        ? error.response?.data?.error?.message
        : 'An error occurred during login';
    throw new Error(errorMessage);
  }
};
