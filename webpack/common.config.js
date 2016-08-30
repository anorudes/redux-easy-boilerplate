const webpack = require('webpack');
const merge = require('webpack-merge');
const development = require('./dev.config.js');
const production = require('./prod.config.js');
const developmentSSR = require('./dev.ssr.config.js');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var devUrl;

// Location dist for dev and prod
if (!global.ssr && process.env.NODE_ENV === 'development') {
  devUrl = 'http://localhost:3000/dist/';
}

if (global.ssr && process.env.NODE_ENV === 'development') {
  devUrl = 'http://localhost:3001/dist/';
}

if (process.env.NODE_ENV === 'production') {
  devUrl = '/dist/';
}

const common = {
  output: {
    path: __dirname + '/../dist/',
    publicPath: devUrl,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css'],
    modulesDirectories: ['node_modules'],
    // Webpack alias for beautiful import
    alias: {
      components: path.join(__dirname, '../app/components/'),
      containers: path.join(__dirname, '../app/containers/'),
      'redux/modules': path.join(__dirname, '../app/redux/modules/'),
      constants: path.join(__dirname, '../app/constants/'),
      decorators: path.join(__dirname, '../app/decorators/'),
      utils: path.join(__dirname, '../app/utils/'),
      test: path.join(__dirname, '../app/test/'),
    },
  },

  module: {
    loaders: [{
      // Loader for fonts (woff)
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      // Loader for fonts (woff2)
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      // Loader for fonts (ttf)
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      // Loader for fonts (otf)
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      // Loader for fonts (eot)
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      // Loader for images (svg)
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      // Loader for js
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      // Loader for images (png)
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      // Loader for images (jpg)
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }, {
      // Loader for images (gif)
      test: /\.gif$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  plugins: [
    // Define global constants
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
      __DEVELOPMENT__: process.env.NODE_ENV === 'development',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __CLIENT__: true,
    }),

    // Chunks for generate vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      name: 'vendor',
    }),
  ],

  postcss: () => [
    require('postcss-partial-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('autoprefixer')({
      browsers: ['> 5%'],
      remove: false,
    }),
  ],
};

if (process.env.NODE_ENV === 'development' && !global.ssr) {
  module.exports = merge(development, common);
}

if (process.env.NODE_ENV === 'development' && global.ssr) {
  module.exports = merge(developmentSSR, common);
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}
