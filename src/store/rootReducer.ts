import { combineReducers } from 'redux';

import { reducers as films } from './films';
import { reducers as characters } from './characters';

export default combineReducers({
  films,
  characters,
});
