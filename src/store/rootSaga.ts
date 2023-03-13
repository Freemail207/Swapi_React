import { all, fork } from 'redux-saga/effects';

import { sagas as initializationSagas } from './initialization';
import { sagas as filmsSaga } from './films';


export default function* rootSaga() {
  yield all([
    fork(initializationSagas),
    fork(filmsSaga),
  ]);
}
