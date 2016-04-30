import Express from 'express';
import http from 'http';
import { renderFullPage } from './utils/render';
const webpack = require('webpack');
const webpackConfig = require('../../webpack/common.config');
const compiler = webpack(webpackConfig);
const app = new Express();
const server = new http.Server(app);
const proxy = require('http-proxy').createProxyServer({});

// Port for web-dev-server and server app (bundle.js, bundle.css, dist, static)
const port = process.env.NODE_ENV === 'development'
  ? 3000
  : 80;

app.use(require('morgan')('short'));

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
}

proxy.on('error', (err, req) => {
  console.error(err, req.url);
});

// Activate proxy for session
app.use(/\/api\/(.*)/, (req, res) => {
  req.url = req.originalUrl;
  proxy.web(req, res, { target: 'http://localhost:3030' });
});

// Static directory for express
app.use('/static', Express.static(__dirname + '/../../static/'));
app.use('/dist', Express.static(__dirname + '/../../dist/'));

app.get(/.*/, (req, res) => {
  const domain = req.get('host').replace(/\:.*/, '');
  res.end(renderFullPage('', port, domain));
});

server.listen(port, () => {
  const host = server.address().address;

  console.log('Server is listening on http://%s:%s', host, port);
});
