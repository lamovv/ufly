'use strict';

const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

module.exports = (isDev, beautify = false) => ({
  mode: isDev ? 'development':'production',
  devtool: isDev ? '#source-map' : false,
  context: __dirname,
  //相对于context的路径
  entry: {
    index: './src/index.js',
    'demo/index':'./demo/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    // 为动态加载的 Chunk 配置输出文件的名称
    chunkFilename: '[name].[hash:6].js',
    libraryTarget: 'umd',
    library: '{{name}}',
    libraryExport: 'default',
    umdNamedDefine: true
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
        test: /\.js$/i,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
    mainFields:['module', 'main'],
    alias: {
      '{{name}}': path.resolve('./src/index')
    }
  },
  plugins:[
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(pkg.version)
    })
  ].concat(isDev ? [new webpack.HotModuleReplacementPlugin()]
    : beautify ? [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: false,
          output: {
            beautify: true,
          },
        }
      })]: []
  )
})