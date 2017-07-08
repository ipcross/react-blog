/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader', ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options:{
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      },
      {
        test: /\.(html|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ]
  },

  resolve: {
    extensions: [".js",".jsx"],
    modules: ["node_modules",
              root]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
