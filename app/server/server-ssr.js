import Express from 'express';
import React from 'react';
import merge from 'merge';
import Immutable from 'immutable';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import morgan from 'morgan';

global.location = {};
global.window = {};
global.document = {};

import { posts } from '../redux/modules';
import configureStore from '../redux/store/configureStore';
import routes from '../routes.js';

import { apiFetch } from './utils/api';
import { renderFullPage } from './utils/render';

const logPath = __dirname + '/../../logs/app.log';
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' });

const app = new Express();
app.use(morgan('combined', { stream: accessLogStream })); // logs
const proxy = require('http-proxy').createProxyServer({});

// Port for web-dev-server (bundle.js, bundle.css, etc...)
const devPort = process.env.NODE_ENV === 'development'
  ? 3001 // Web-dev-server in dev-ssr mode
  : 80; // Web-dev-server removed in prod mode, all files located in dist/ after "build"

// Port for server app
const port = process.env.NODE_ENV === 'development'
  ? 3000
  : 80;

// Activate cookie parser
app.use(cookieParser());

// Activate proxy for session
app.use(/\/api\/(.*)/, (req, res) => {
  req.url = req.originalUrl;
  proxy.web(req, res, { target: 'http://localhost:3030' });
});

// Static directory
app.use('/static', Express.static(__dirname + '/../../static/'));
app.use('/dist', Express.static(__dirname + '/../../dist/'));

const fetchData = (component, host, pathname, params) => {
  return new Promise(resolve => {
    switch (component) {
      // Fetch state for posts from api server
      case 'posts':
        apiFetch(posts.apiGetPosts(), host).then(res => {
          resolve({
            posts: {
              posts: res.posts,
            },
          });
        });
        break;

      default:
        resolve({});
    }
  });
};

function handleRender(req, res) {
  return match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).end(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const { location: { pathname }, params } = renderProps;
      const host = req.get('host').replace(/\:.*/, '');
      const initialState = Immutable.fromJS(configureStore().getState()).toJS(); // Initial state from redux

      let component;
      const query = pathname.split('/')[1];

      // Detect route page
      if (query === 'posts' || !query) {
        component = 'posts';
      }

      // Get state (fetch from api server)

      return fetchData(component, host, pathname, params).then(appState => {

        // Merge initial state with fetch state

        const finishState = merge.recursive(initialState, {
          ...appState,
        });

        const store = configureStore(finishState);

        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const head = Helmet.rewind();
        head.url = `http://${req.get('host')}${req.url}`;

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        // Send the rendered page back to the client
        res.end(renderFullPage(html, devPort, host, finalState, head));
      });

    } else {
      res.json();
    }
  });
}

app.use(handleRender);
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`App: listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
