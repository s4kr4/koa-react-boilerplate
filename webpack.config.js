const path = require('path');

module.exports = {
  entry: './src/www/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, 'www/javascripts'),
    publicPath: 'javascripts/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'],
        }
      },
    ]
  }
}
