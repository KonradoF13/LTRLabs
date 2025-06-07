export type LoginProps = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      confirmed_at: string;
    };
  };
};
