import Express from 'express';
import http from 'http';
import { renderFullPage } from './utils/render';
import superagent from 'superagent';
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

app.use('/policies', (req, res) => {
  var urlBits = [
    'http://actuary-development.policygenius.com/policies?date_of_birth=1980-01-21&gender=male&health_profile%5Bcurrently_uses_tobacco%5D=false&health_profile%5Bheight_feet%5D=5&health_profile%5Bheight_inches%5D=8&health_profile%5Bhistory_of_tobacco_use%5D=false&health_profile%5Bweight%5D=180&policy_profile%5Bcoverage_amount%5D=',
    req.query.coverageAmount,
    '&policy_profile%5Bterm_in_years%5D=',
    req.query.term,
    '&state_code=TX'
  ];

  superagent.get(urlBits.join('')).then(({ body }) => {
    res.json(body);
  });
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
