import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';

const {
  Simple,
  Items,
} = containers;

export default (
  <Route path="/" component={App}>
    <Route path="simple" component={Simple}/>
    <Route path="items" component={Items}/>
  </Route>
);
