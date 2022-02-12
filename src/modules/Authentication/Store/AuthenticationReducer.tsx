import AuthenticationAction from './AuthenticationActions';

export const defaultDataConfig = {
  token: null,
  loadingLogin: false,
};

const AuthenticationReducer = (
  state = defaultDataConfig,
  action: any = { type: null },
) => {
  switch (action.type) {
    case AuthenticationAction.SET_TOKEN_DATA:
      return {
        ...state,
        token: action.payload,
      };

    case AuthenticationAction.SET_LOADING_STATE:
      return {
        ...state,
        loadingLogin: action.payload,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
