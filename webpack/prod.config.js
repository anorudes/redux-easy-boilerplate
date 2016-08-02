const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    main: ['./app/index'],
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        notExtractLoader: 'style-loader',
        loader: 'css?minimize!postcss-loader!sass-loader',
      }),
    }],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.ProvidePlugin({
      Promise: 'exports?global.Promise!es6-promise',
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
  ],
};
