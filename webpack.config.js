const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  }
};
