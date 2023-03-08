import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IS_DEV } from '../constants/constants';
/** bred */
import { createBrowserHistory } from 'history';
import * as initializationActions from './initialization/actions';

import rootReducer from './rootReducer';

import rootSaga from './rootSaga';

export const history = createBrowserHistory();
/** Adding sagas */
const sagaMiddleware = createSagaMiddleware();

/** Initializing store */
const store = createStore(
  rootReducer,
  IS_DEV
    ? compose(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware)),
);

/** Starting sagas */
sagaMiddleware.run(rootSaga);

/** Initialization */
store.dispatch(initializationActions.initialize());

/** Exports */
export default store;
