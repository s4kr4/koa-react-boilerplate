const path = require('path');

const serverPort = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: './app/src/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'babel-preset-env'],
        }
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app/dist'),
    open: true,
    proxy: {
      '/api': `http://localhost:${serverPort}`,
    },
  },
}
