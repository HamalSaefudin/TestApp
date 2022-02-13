import axios from 'axios';
import { Dispatch } from 'redux';
import { base_url } from '../../../../env.config';
import Route from '../../../app/Routes';

enum AuthenticationAction {
  SET_TOKEN_DATA = '@Authentication/SET_TOKEN',
  SET_LOADING_STATE = '@Authentication/SET_LOADING_STATE',
}

export async function onPostLogin(
  bodyData: { username: string; password: string },
  dispatch: Dispatch,
) {
  dispatch({ type: AuthenticationAction.SET_LOADING_STATE, payload: true });
  try {
    const { data } = await axios.post(`${base_url}/api/login`, bodyData);
    dispatch({ type: AuthenticationAction.SET_TOKEN_DATA, payload: data });
    Route.navigate(Route.Dashboard);
  } catch (e: any) {
    console.log(e);
  } finally {
    dispatch({ type: AuthenticationAction.SET_LOADING_STATE, payload: false });
  }
}

export default AuthenticationAction;
