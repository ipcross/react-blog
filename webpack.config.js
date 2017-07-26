/* eslint-disable */
import path from 'path';
import webpack from 'webpack';

const root = path.join(process.cwd(), 'src');

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
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
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
