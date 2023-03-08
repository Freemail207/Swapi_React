// Imports: Dependencies
import { takeEvery, put, all, fork } from 'redux-saga/effects';
import InitializationActionTypes from '../actions/types';
import AuthActionTypes from '../../auth/actions/types';
// import CustomersTypes from '../../customers/actions/types';
import * as authActions from '../../auth/actions';
// import * as customersActions from '../../customers/actions';

/** Workers */
/** App startup procedures */
function* initializeWorker() {
  /** Loading auth info from local storage */
  yield put(authActions.loadAuthInfo());
}

function* initializePostSignInWorker() {
  yield console.log('initialize');
}

function* initializePostSignOutWorker() {
  yield put(authActions.clearAuthState());
}

/** Watchers */
function* initializeWatcher() {
  yield takeEvery(InitializationActionTypes.INITIALIZE, initializeWorker);
}
function* initializePostSignInWatcher() {
  yield takeEvery(AuthActionTypes.SIGN_IN_SUCCESS, initializePostSignInWorker);
}
function* initializePostSignOutWatcher() {
  yield takeEvery(
    AuthActionTypes.SIGN_OUT_SUCCESS,
    initializePostSignOutWorker
  );
}

/** Exports */
export default function* () {
  yield all([
    fork(initializeWatcher),
    fork(initializePostSignInWatcher),
    fork(initializePostSignOutWatcher),
  ]);
}
