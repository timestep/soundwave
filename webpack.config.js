/* eslint-disable sorting/sort-object-props */

const path = require('path');
const proxy = require('./server/webpack-dev-proxy');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

module.exports = {
  entry: { app: './src/app.js' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: plugins,
  postcss: postcssInit,

  devServer: {
    contentBase: './src/',
    historyApiFallback: { index: '/' },
    proxy: proxy(),
  },

  module: {
    loaders: [
      loaders.svg,
      loaders.png,
      loaders.jpg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.babel,
      loaders.html,
      loaders.json,
      loaders.sass,
      loaders.css,
    ],
  },
};
