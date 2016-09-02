const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./.babelrc'));

// Remove prop-types, webpack alias
const ignore = [
  'babel-plugin-transform-react-remove-prop-types', ['babel-plugin-webpack-alias', {
    config: __dirname + '/../webpack/common.config.js',
  }],
];

// Hook for react css modules (need for server-side-rendering and tests)
const hook = require('css-modules-require-hook');
hook({
  generateScopedName: process.env.NODE_ENV === 'production'
    ? '[hash:base64:5]'
    : '[path]__[local]__[hash:base64:3]',
});

config.plugins = config.plugins.concat(ignore);
require('babel-core/register')(config);

// Hook for images (need for server-sider-rendering and tests)
require('asset-require-hook')({
  extensions: ['jpg', 'png'],
});

global.__CLIENT__ = false;

require('../app/server/server-ssr.js');
