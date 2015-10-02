import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {  Provider } from 'react-redux';
import Main from './Main';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, history } from 'react-router';

import * as containers from 'containers';

const logger = createLogger({collapsed: true});
const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducersApp);

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <Router history={ history }>
            <Route path="/" component={ Main }>
              <Route path="simple" component={ containers.SimpleComponent } />
              <Route path="items" component={ containers.Items } />
            </Route>
          </Router>
        </Provider>
    );
  }
}
