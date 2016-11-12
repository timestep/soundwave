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
    presets: ['es2015', 'react', 'stage-0']
  },
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.sass = {
  test: /\.scss$/,
  loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style!css!postcss',
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json/,
  loader: 'json-loader',
};

exports.svg = makeUrlLoader(/\.svg?/);
exports.eot = makeFontFileLoader(/\.eot?/);
exports.woff = makeFontFileLoader(/\.woff?/);
exports.woff2 = makeFontFileLoader(/\.woff2?/);
exports.ttf = makeFontFileLoader(/\.ttf?/);
exports.png = makeUrlLoader(/\.png?/);
exports.jpg = makeUrlLoader(/\.jpg?/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/,
  };
}

function makeFontFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'file-loader?name=fonts/[name].[ext]',
    exclude: /node_modules/,
  };
}
