const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV != 'development';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'cheap-module-source-map':'source-map', //cheap-module-eval-source-map
  entry: {
    'demo/index': './demo/index.js'
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
        test: /\.ts/,
        exclude: /node_modules|assembly/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.ts$/,
        loader: 'assemblyscript-wasm-loader',
        include: /assembly/,
        options: {
          limit: 102400,
          // limit: 1024,
          // optimize: '3z',
          // measure: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-runtime', {
                  useESModules: true,
                }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-object-rest-spread'
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
    //允许机器外访问，使用本机IP:Port，如：192.168.1.6:9000
    host: `${ip.address()}`,
    port: 9000,
    contentBase: [
      path.join(__dirname, '/dist'),
      path.join(__dirname, '/demo'),
    ],
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main'],
    alias: {
      '{{name}}': path.resolve(__dirname, './src/index.js')
    }
  }
};