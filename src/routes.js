import React from 'react';
import { Route } from 'react-router';
import * as containers from './containers';

const {
  App,
  Home,
  List,
} = containers;

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path="list" component={List}/>
  </Route>
);
