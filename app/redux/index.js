import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './modules/app/app';
import posts from './modules/posts/posts';

const rootReducer = combineReducers({
  form: formReducer,
  app,
  posts,
});

export default rootReducer;
