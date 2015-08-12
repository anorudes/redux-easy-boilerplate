import React, { Component } from 'react';
import { applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import * as reducers from './reducers';
import { createStore, renderDevTools } from './store_enhancers/devTools';
import logger from 'redux-logger';

let reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
let store = createStoreWithMiddleware(reducersApp);

let devTools = true;

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          { () => <Main /> }
        </Provider>
        { /* devTools && renderDevTools(store) */ }
      </div>
    )
  }
}
