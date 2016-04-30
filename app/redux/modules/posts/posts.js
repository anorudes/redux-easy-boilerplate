import { createReducer } from '../../utils/createReducer';

const initialState = {
  items: [],
};

// Work with promise middleware
// See in app/redux/middleware/promise
export default createReducer({
  ['GET_POSTS_REQUEST']: (state, { payload }) =>
    state.set('items', []), // for example, set empty array on request

  ['GET_POSTS_SUCCESS']: (state, { payload }) =>
    state.set('items', payload.posts), // get posts from server

  ['GET_POSTS_FAILURE']: (state, { payload }) =>
    console.log('error'), // for example, error from server
}, initialState);

// Work with api middleware. See in app/redux/middleware/api
export const apiGetPosts = () => ({
  mode: 'GET',
  type: 'GET_POSTS',
  url: 'posts',
  callback: (res, dispatch) => {
    // callback (success and failure)
    console.log(res);
    // dispatch(OthereExampleAction)
  },
  onSuccess: (res, dispatch) => {
    // on success
    console.log(res);
    // dispatch(OthereExampleAction)
  },
  onFailure: (res, dispatch) => {
    // faiulre
    console.log(res);
    // dispatch(OthereExampleAction)
  },
});
