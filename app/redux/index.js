import { combineReducers } from 'redux';

import app from './modules/app/app';
import posts from './modules/posts/posts';

const rootReducer = combineReducers({
  app,
  posts,
});

export default rootReducer;
