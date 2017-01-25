import configureStore from './configureStore';

let initialState;
try {
  initialState = window.__INITIAL_STATE__;
} catch (err) {
  initialState = {};
}

export default configureStore(initialState);
