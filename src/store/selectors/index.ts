import { IRootState } from '../types';

// TODO mock
export const getAuthState = (state: IRootState) => {
    return {authInfo: {access_token: 'asdasda213123asd'}};
};

export const getAuthInfo = (state: IRootState) => getAuthState(state)?.authInfo;
export const getAuthToken = (state: IRootState) => getAuthInfo(state)?.access_token;
