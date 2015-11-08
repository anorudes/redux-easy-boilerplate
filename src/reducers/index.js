import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';
import { items } from './items';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  items,
});

export default rootReducer;
