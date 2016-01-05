var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist/'),
    publicPath: 'dist/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', 'src'],
  },

  module: {
    loaders: [{
      test: /bootstrap\/js\//,
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
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss-loader!sass',
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }],
  },
  
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
