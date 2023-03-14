import { all, fork } from 'redux-saga/effects';

import { sagas as initializationSagas } from './initialization';
import { sagas as filmsSaga } from './films';
import { sagas as characters } from './characters';


export default function* rootSaga() {
  yield all([
    fork(initializationSagas),
    fork(filmsSaga),
    fork(characters),
  ]);
}
