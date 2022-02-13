interface ReduxState {
  auth: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
  };
  app: {
    loading: boolean;
  };
}

export default ReduxState;
