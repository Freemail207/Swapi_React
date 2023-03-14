// Imports: Dependencies
import { takeEvery, put, call, all, fork, select } from 'redux-saga/effects';
import { request } from '@utilities/http';
import CharacterActionTypes from '../actions/types';
import * as filmsActions from '../actions';
import { ORIGIN_URL } from '@constants/constants';
// import * as notificationActions from '@store/notifications/actions';
// import { NotificationVariant } from '@store/notifications/types';

/** Error handlers */
function* handleError(error: any) {
  const statusCode = error?.response?.status;
  const errorMsg = error?.response?.data?.message;
  /** Parsing messages */
  if (statusCode === 401 ) {
    /** Custom sign up error */
  //  yield put(authActions.signOut());
    // window.location.reload();
  }
  if (errorMsg) {
    alert(errorMsg);
   // yield put(notificationActions.addNotification({ text: errorMsg, type: NotificationVariant.Danger }));
  } else {
  //  yield put(notificationActions.addNotification({ text: 'Something went wrong', type: NotificationVariant.Danger }));
  }
  // yield put(authActions.setSignInResponse(error?.response));
}

/** Workers */

function* clearCharacterListWorker() {
  yield put(filmsActions.clearCharacterInfo());
}

function* fetchCharacterListWorker({ type, meta }) {
  try {
    const response: any = yield call(request, {
      url: `${ORIGIN_URL}/people`,
      method: 'GET',
      headers: {
        Authorization: `Bearer theory_auth_token`,
      },
    });
    yield put(filmsActions.setCharacterInfo(response.data.results));
    yield meta?.onSuccess(response.status);
  } catch (error) {
    yield handleError(error);
  }
}

function* fetchOneFilmInfoWorker(uuid: any) {
  try {
    const response: any = yield call(request, {
      url: `${ORIGIN_URL}/people/${uuid.data}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer theory_auth_token`,
      },
    });
    yield put(filmsActions.fetchOneCharacterInfo(response.data.data));
  } catch (error) {
    yield handleError(error);
  }
}

/** Watchers */
function* fetchCustomersListWatcher() {
  yield takeEvery(CharacterActionTypes.FETCH_CHARACTERS_INFO, fetchCharacterListWorker);
}
function* fetchOneCustomerInfoWatcher() {
  yield takeEvery(CharacterActionTypes.FETCH_ONE_CHARACTER_INFO, fetchOneFilmInfoWorker);
}
function* cleanAuthInfoWatcher() {
  yield takeEvery(CharacterActionTypes.CLEAR_CHARACTERS_INFO, clearCharacterListWorker);
}

/** Exports */
export default function* () {
  yield all([
    fork(fetchCustomersListWatcher),
    fork(fetchOneCustomerInfoWatcher),
    fork(cleanAuthInfoWatcher),
  ]);
}
