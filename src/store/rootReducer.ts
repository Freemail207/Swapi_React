import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers as films } from './films';

export default combineReducers({
  films,
});
