const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new CopyWebpackPlugin([
    { from: 'src/ringer.mp3' },
  ]),
  new webpack.NoErrorsPlugin(),
];

module.exports = basePlugins;
