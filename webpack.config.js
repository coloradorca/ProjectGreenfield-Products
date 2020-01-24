let path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": {
                  "node": "10"
                }
              }],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  }
};