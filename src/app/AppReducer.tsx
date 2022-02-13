export const defaultDataConfig = {
  loading: false,
};

export enum AppAction {
  SET_LOADING = '@App/SET_LOADING',
}

const AppReducer = (
  state = defaultDataConfig,
  action: any = { type: null },
) => {
  switch (action.type) {
    case AppAction.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
