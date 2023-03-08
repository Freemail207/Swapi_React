// Imports: Dependencies
import { takeEvery, put, call, all, fork, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { request } from '@utilities/http';
import AuthActionTypes from '../actions/types';
import * as authActions from '../actions';
import { ORIGIN_URL, AUTH_STORAGE_KEY } from '@constants/constants';
import { getAuthInfo, getAuthToken } from '@store/selectors';
import { history } from '@store';


/** Error handlers */
function* handleError(error: any) {
  const authToken = yield select(getAuthToken);
  const statusCode = error?.response?.status;
  const errorMsg = error?.response?.data?.message;
  /** Parsing messages */
  if (statusCode === 401 && authToken) {
    /** Custom sign up error */
    yield put(authActions.signOut());
    // window.location.reload();
  }
  yield put(authActions.setSignInResponse(error?.response));
}

/** Workers */
/** SignIn / Login2 */
function* signInWorker(action: AnyAction) {
  try {
    const response = yield call(request, {
      url: `${ORIGIN_URL}/admin/login`,
      method: 'POST',
      data: action.payload,
    });
    yield put(authActions.setAuthInfo(response.data.data));
    yield put(authActions.saveAuthInfo());
    yield put(authActions.signInSuccess());
    // Check role
    switch (response.data.data.user.role) {
      case 'user':
        history.push('/Game');
        break;
      default:
        history.push('/Game');
    }
  } catch (error) {
    yield handleError(error);
  }
}
/** SignOut / Logout */
function* signOutWorker() {
  yield put(authActions.clearAuthInfo());
  yield put(authActions.signOutSuccess());
  yield history.push('/');
}

function* saveAuthInfoWorker() {
  const authInfo = yield select(getAuthInfo);
  yield localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authInfo));
}

function* loadAuthInfoWorker() {
  try {
    const authInfo = JSON.parse(
      localStorage.getItem(AUTH_STORAGE_KEY) || 'null'
    );
    if (authInfo) {
      yield put(authActions.setAuthInfo(authInfo));
      yield put(authActions.signInSuccess());
    }
  } catch (error) {
    console.error(error);
  }
}

function* clearAuthInfoWorker() {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error(error);
  }
  yield null;
}

/** Watchers */
function* signInWatcher() {
  yield takeEvery(AuthActionTypes.SIGN_IN, signInWorker);
}
function* signOutWatcher() {
  yield takeEvery(AuthActionTypes.SIGN_OUT, signOutWorker);
}
function* saveAuthInfoWatcher() {
  yield takeEvery(AuthActionTypes.SAVE_AUTH_INFO, saveAuthInfoWorker);
}
function* cleanAuthInfoWatcher() {
  yield takeEvery(AuthActionTypes.CLEAR_AUTH_INFO, clearAuthInfoWorker);
}
function* loadAuthInfoWatcher() {
  yield takeEvery(AuthActionTypes.LOAD_AUTH_INFO, loadAuthInfoWorker);
}

/** Exports */
export default function* () {
  yield all([
    fork(signInWatcher),
    fork(signOutWatcher),
    fork(saveAuthInfoWatcher),
    fork(cleanAuthInfoWatcher),
    fork(loadAuthInfoWatcher),
  ]);
}
