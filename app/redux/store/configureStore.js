import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../';
import promiseMiddleware from '../middleware/promise';
import apiMiddleware from '../middleware/api';

const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

const logger = createLogger({
  collapsed: true,
  predicate: () =>
    process.env.NODE_ENV === 'development',
});

const middlewares = [
  apiMiddleware,
  promiseMiddleware(),
  thunkMiddleware,
  !__PRODUCTION__ && __CLIENT__ && logger,
].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares,
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../', () => {
      const nextRootReducer = require('../index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
