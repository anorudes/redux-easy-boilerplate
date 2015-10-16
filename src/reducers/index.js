import { combineReducers } from 'redux';

import { simple } from './simple';
import { items } from './items';

const rootReducer = combineReducers({
  simple,
  items,
});

export default rootReducer;
