'use strict';
const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV != 'development';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'cheap-module-source-map':'source-map', //cheap-module-eval-source-map
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
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ],
              plugins: [
                ['@babel/plugin-transform-runtime', {
                  // 开启后，关闭commonjs方式，以esm方式引入helpers函数
                  // useESModules: true,  //默认false
                }],
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
    // 注释上面配置打开如下配置，可本机绑定host(如，30.11.106.69	dev.foo.com)，并提供代理服务(如Charles)，手机绑定代理后，可访问 dev.foo.com
    // host: '0.0.0.0',
    // disableHostCheck: true,
    contentBase: [
      'dist',
      'demo',
    ],
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
    // 若开发调试本地模块，可在配置为['src', 'module', 'main']，并在本地模块的package.json增加"src":"src/index.ts"配置
    mainFields: ['module', 'main'],
    alias: {
      '{{name}}': path.resolve('./src/index')
    }
  }
};