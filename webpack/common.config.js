const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

require('babel-polyfill');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

var entry = [
    './src/index'
  ];

const common = {

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', 'src'],
  },

  module: {
    loaders: [{
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery',
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
};

if (TARGET === 'start' || !TARGET) {
  var config = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  var config = merge(production, common);
}

config.entry = config.entry.concat(entry);

module.exports = config;
