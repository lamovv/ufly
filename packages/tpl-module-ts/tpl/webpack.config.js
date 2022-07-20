'use strict';
const path = require('path');
const pkg = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanBeforeHtmlWebpackPlugin = require('clean-before-html-webpack-plugin');
const { getCertPath } = require('@ufly/sam');
const { env } = require('process');

const https = env.HTTPS == 1;
const cert = getCertPath();
const isProd = process.env.NODE_ENV == 'production';

module.exports = {
  // devtool: isProd ? 'cheap-module-source-map':'source-map', //cheap-module-eval-source-map
  devtool: 'source-map',
  entry: {
    'demo/index': './demo/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: pkg.name,
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  optimization: {
    minimize: isProd,
    // // 生产环境默认都是可持久缓存的数字。开启配置使用 友好可读性高的 id，模块名比数字更易读
    // moduleIds: 'named',  // bundle内依赖模块名，如：386 -> './node_modules/foo/lib/index.js'
    // chunkIds: 'named',  // entry之外打包生成的chunk文件名，如：286.js -> src_a_js.js
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
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    // 开启后，关闭commonjs方式，以esm方式引入helpers函数
                    // useESModules: true,  //默认false
                  },
                ],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: '[name].html',
      inject: 'body',
    }),
  ].concat(
    isProd
      ? [
          new CleanBeforeHtmlWebpackPlugin({
            patterns: [
              {
                match: '<script src="../dist/demo/index.js"></script>',
                replacement: '',
              },
            ],
          }),
          new MiniCssExtractPlugin(),
        ]
      : []
  ),
  devServer: {
    // 融合Sam 配置
    allowedHosts: 'all',
    https: https && cert,
    client: {
      webSocketURL: {
        protocol: `ws${https ? 's' : ''}`,
        hostname: 'localhost',
      },
    },
    static: {
      directory: path.join(__dirname, './mock'),
      publicPath: '/api',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    modules: ['node_modules'],
    // 若开发联调本地模块，可配置为['src', 'module', 'main']，并在本地模块的package.json增加"src":"src/index.js"配置
    mainFields: ['module', 'main'],
    // mainFields: ['src', 'module', 'main'],
    alias: {
      '{{scope}}{{name}}': path.resolve('./src/index'),
    },
  },
};
