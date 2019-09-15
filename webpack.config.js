'use strict';

const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'assets/javascripts/index.ts'),
  output: {
    filename: 'librarian.bundle.js',
    path: path.resolve(__dirname, 'static/javascripts'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
