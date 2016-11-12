/* eslint-disable sorting/sort-object-props */
const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: { app: './src/app.js' },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devServer: {
    outputPath: path.join(__dirname, 'build'),
    inline: true,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },

  plugins: plugins,

  module: {
    loaders: [
      loaders.babel,
      loaders.html,
    ],
  },
};
