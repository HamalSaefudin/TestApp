export const defaultDataConfig = {
  accessToken: '',
};

const AuthenticationReducer = (
  state = defaultDataConfig,
  action: any = { type: null },
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AuthenticationReducer;
