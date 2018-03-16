const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'main.css': [
      path.resolve(__dirname, 'assets/css/main.css'),
    ],
    'bundle.js': [
      path.resolve(__dirname, 'assets/js/index.js'),
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'assets/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      },
      {
        test: /\.css$/,
          /*
        resolve: {
          modules: [
            'node_modules',
            path.resolve(__dirname, 'assets/css')
          ],
        },
        */
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
