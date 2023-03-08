import { all, fork } from 'redux-saga/effects';

import { sagas as initializationSagas } from './initialization';
import { sagas as authSagas } from './auth';


export default function* rootSaga() {
  yield all([
    fork(initializationSagas),
    fork(authSagas),
  ]);
}
