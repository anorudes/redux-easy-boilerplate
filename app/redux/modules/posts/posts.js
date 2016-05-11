import { createReducer } from '../../utils/createReducer';

// initial state before request data from server
const initialState = {
  items: [],
};

// Work with promise middleware
// See in /app/redux/middleware/promise.js
export default createReducer({
  ['GET_POSTS_REQUEST']: (state, { payload }) =>
    state.set('items', []), // for example, set empty array on request

  ['GET_POSTS_SUCCESS']: (state, { payload }) =>
    state.set('items', payload.posts), // get posts from server

  ['GET_POSTS_FAILURE']: (state, { payload }) =>
    console.log('error'), // for example, error from server
}, initialState);

// Work with api middleware (will generate request promise).
// See in /app/redux/middleware/api.js
export const apiGetPosts = () => ({
  mode: 'GET', // GET, POST
  type: 'GET_POSTS', // see: createReducer in this file
  url: 'posts', // => api/posts (see in /api/routes/posts.js)
  data: {
    testParam: 'test', // query (if GET), body (if POST) (see in /api/routes/posts.js)
  },
  onSuccess: (res, dispatch) => {
    // Callback on success
    console.log(res); // respond from server

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
  onFailure: (res, dispatch) => {
    // Callback on failure
    console.log(res); // respond from server

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
  callback: (res, dispatch) => {
    // Callback (success and failure)
    console.log(res); // respond from server

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
});
