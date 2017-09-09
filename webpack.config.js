const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/public/src/', 'index.jsx'),
  ],
  output: ({ path: path.join(`${__dirname}/public/`), filename: 'bundle.js', publicPath: '/' }),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
