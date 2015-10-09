import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { App } from 'containers';
import {
  Simple,
  Items,
} from 'containers';

const logger = createLogger({collapsed: true});
const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducersApp);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Route path="/" component={App}>
        <Route path="simple" component={Simple}/>
        <Route path="items" component={Items}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('App'));