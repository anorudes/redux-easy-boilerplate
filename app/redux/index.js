import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import app from './modules/app/app';
import posts from './modules/posts/posts';

const rootReducer = combineReducers({
  reduxAsyncConnect,
  app,
  posts,
});

export default rootReducer;
