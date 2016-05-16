import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './redux/store/configureStore';
import routes from './routes';
import DevTools from './utils/DevTools.js';


if (__CLIENT__ && __DEVELOPMENT__) {
  // https://facebook.github.io/react/docs/advanced-performance.html
  window.Perf = require('react-addons-perf');
}

let initialState;
try {
  initialState = window.__INITIAL_STATE__; // for erver-side-rendering
} catch (err) {
  initialState = {};
}

export const history = browserHistory;

export const store = configureStore(initialState);

if (__CLIENT__) {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          {routes}
        </Router>
        {__DEVELOPMENT__ && <DevTools />}
      </div>
    </Provider>,
    document.getElementById('root')
  );
}
