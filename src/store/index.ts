import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IS_DEV } from '@constants/constants';
import {composeWithDevTools} from 'redux-devtools-extension';
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
    IS_DEV ?
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ) : applyMiddleware(sagaMiddleware)
);

/** Starting sagas */
sagaMiddleware.run(rootSaga);

/** Initialization */
store.dispatch(initializationActions.initialize());

/** Exports */
export default store;
