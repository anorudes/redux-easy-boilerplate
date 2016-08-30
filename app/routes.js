import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { asyncComponent } from './utils/asyncComponent'; /* for async page, show loading component */

import Root from './containers/Root';
import Posts from './containers/Posts';
import About from './components/About';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />
    { /* async component */}
    <Route path="/async-example" getComponent={(location, callback) =>
      __CLIENT__
        ? asyncComponent(require.ensure([], require => callback('', require('./components/AsyncExample').default), 'async-example'))
        : callback('', require('./components/AsyncExample').default)
    } />

    <Route path="/posts" component={Posts} />
    <Route path="/about" component={About} />
  </Route>
);
