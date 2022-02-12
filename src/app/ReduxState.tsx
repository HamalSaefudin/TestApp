interface ReduxState {
  auth: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    loadingLogin: boolean;
  };
}

export default ReduxState;
