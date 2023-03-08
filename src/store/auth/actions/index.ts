import AuthActionTypes from './types';
import { ISignInData, IUserInfo } from '../types';

export const clearAuthState = () => ({
  type: AuthActionTypes.CLEAR_AUTH_STATE,
});

/** Requests */
export const signIn = (signInData: ISignInData) => ({
  type: AuthActionTypes.SIGN_IN,
  payload: signInData,
});
export const signInSuccess = () => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
});
export const signOut = () => ({
  type: AuthActionTypes.SIGN_OUT,
});
export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});

export const fetchNewToken = () => ({
  type: AuthActionTypes.FETCH_NEW_TOKEN,
});

/** State */
export const setAuthInfo = (info: { access_token: string; user: IUserInfo }) => ({
  type: AuthActionTypes.SET_AUTH_INFO,
  payload: info,
});
export const saveAuthInfo = () => ({
  type: AuthActionTypes.SAVE_AUTH_INFO,
});
export const loadAuthInfo = () => ({
  type: AuthActionTypes.LOAD_AUTH_INFO,
});
export const clearAuthInfo = () => ({
  type: AuthActionTypes.CLEAR_AUTH_INFO,
});
export const setSignInResponse = (response: any) => ({
  type: AuthActionTypes.SET_SIGN_IN_RESPONSE,
  payload: response,
});
export const clearSignInResponse = () => ({
  type: AuthActionTypes.CLEAR_SIGN_IN_RESPONSE,
});
