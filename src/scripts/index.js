import React from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './Containers/App';
import * as reducers from './Reducers/Reducers';

import { createStore, renderDevTools } from './store_enhancers/devTools';

let reducersApp = combineReducers(reducers);
let store = createStore(reducersApp);

let rootElement = document.getElementById('Dashboard');
React.render(
  <div>
    <Provider store={ store }>
      {() => <App />}
    </Provider>
  </div>,
  rootElement
);