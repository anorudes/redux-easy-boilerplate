import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { asyncComponent } from './utils/asyncComponent'; /* for show loading component */

import Root from './components/Root';
import Posts from './components/Pages/Posts';
import About from './components/Pages/About';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />
    { /* async component */}
    <Route path="/async-example" getComponent={(location, callback) =>
      __CLIENT__
        ? asyncComponent(require.ensure([], require => callback('', require('./components/Pages/AsyncExample').default), 'async-example'))
        : callback('', require('./components/Pages/AsyncExample').default)
    } />

    <Route path="/posts" component={Posts} />
    <Route path="/about" component={About} />
  </Route>
);
