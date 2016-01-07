import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './store/configureStore';


import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';

const history = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore();

syncReduxAndRouter(history, store);


const rootRoute = {
  path: '/',
  component: App,
  indexRoute: {
      component: Home
  },
  childRoutes: [
      { path: 'home', component: Home },
      { path: 'list', component: List },
      require('./containers/LazyPage/routes')
  ]
};


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={rootRoute}></Router>
    </Provider>,
    document.getElementById('root')
);