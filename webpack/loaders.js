'use strict';

exports.eslint = {
  test: /\.jsx?$/,
  loader: 'esint-loader',
  exclude: /node_modules/,
};

exports.babel = {
  test: /\.jsx?$/,
  exclude: [
    /node_modules/,
  ],
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'stage-0'],
  },
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};
