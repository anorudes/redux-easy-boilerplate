const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: ['webpack-hot-middleware/client', './app/index'],
  },

  resolve: {
    unsafeCache: true,
  },

  module: {
    // Loader fo css modules (https://github.com/gajus/react-css-modules)
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        notExtractLoader: 'style-loader',
        loader: 'css?minimize&module&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      }),
    }],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
