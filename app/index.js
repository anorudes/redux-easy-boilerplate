import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-connect';
import { Router } from 'react-router';
import routes from './routes';
import store from 'redux/store';
import history from './history';

if (__CLIENT__ && __DEVELOPMENT__) {
  // https://facebook.github.io/react/docs/advanced-performance.html
  window.Perf = require('react-addons-perf');
}

if (__CLIENT__) {
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Router render={(props) => <ReduxAsyncConnect {...props} />} history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
