'use strict';
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const ip = require('ip');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: '#source-map',
  // devtool: false,
  entry: {
    'demo/index': './demo/index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: pkg.name,
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  stats: {
    env: true,
    errors: true,
    modules: false,
    performance: true,
    source: true,
    version: false,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules|assembly/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties'
              ],
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  watchOptions: {
    ignored: /node_modules/,
    // poll: 1000
  },
  devServer: {
    //允许手机绑定本地代理服务后访问，
    host: `${ip.address()}`,
    contentBase: [
      'dist',
      'demo',
    ],
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
    mainFields:['module', 'main'],
    alias: {
      '{{name}}': path.resolve('./src/index')
    }
  }
};