import AuthActionTypes from '../actions/types';
import { IAuthState } from '../types';

export default function auth(state: IAuthState = {} as IAuthState, action: any) {
  switch (action.type) {
    case AuthActionTypes.CLEAR_AUTH_STATE:
      return {};
    /** Setting auth info with token */
    case AuthActionTypes.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    case AuthActionTypes.CLEAR_AUTH_INFO:
      return {
        ...state,
        authInfo: null,
      };
    /** Set sign in errors */
    case AuthActionTypes.SET_SIGN_IN_RESPONSE:
      return {
        ...state,
        signInResponse: action.payload,
      };
    case AuthActionTypes.CLEAR_SIGN_IN_RESPONSE:
      return {
        ...state,
        signInResponse: null,
      };
    default:
      return state;
  }
}
