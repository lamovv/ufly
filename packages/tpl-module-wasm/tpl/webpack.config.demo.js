'use strict';
const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanBeforeHtmlWebpackPlugin = require('clean-before-html-webpack-plugin');

const isProd = process.env.NODE_ENV == 'production';

// Web Server 协议、端口号配置，默认 http:、80
const prototol = 'http:';
const port = 80;

module.exports = {
  // devtool: isProd ? 'cheap-module-source-map':'source-map', //cheap-module-eval-source-map
  devtool: 'source-map',
  entry: {
    'demo/index': './demo/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
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
                  // 开启后，关闭commonjs方式，以esm方式引入helpers函数
                  useESModules: true,  //默认false
                }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties'
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
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: '[name].html',
      inject: 'body'
    })
  ].concat(isProd ? [
    new CleanBeforeHtmlWebpackPlugin({
      patterns: [{
        match: '<script src="../dist/demo/index.js"></script>',
        replacement: ''
      }]
    }),
    new MiniCssExtractPlugin()
  ]: [
    new webpack.HotModuleReplacementPlugin(),
  ]),
  watchOptions: {
    ignored: /node_modules/,
    //  aggregateTimeout: 300,  // 文件变更触发重新构建的 防抖 延时配置
    //  poll: 700,  // 检查一次变动的周期
  },
  devServer: {
    hot: true,
    watchContentBase: true,
    // 允许手机绑定本地代理服务后访问，与 disableHostCheck: true 组合使用
    // host: `${ip.address()}`,
    host: '0.0.0.0',
    port,
    openPage: `${prototol}//${ip.address()}${port == 80 ? '': `:${port}`}`,  // 同网段内，手机可直接访问无需代理
    disableHostCheck: true,
    // 与 host: '0.0.0.0' 配合使用，在 disableHostCheck: true 未开启时，配置可访问服务的域名白名单
    // allowedHosts: [
    //   'dev.module.com', //需绑定host：如 127.0.0.1	dev.demo.com
    // ],

    contentBase: [
      'demo',
      'coverage/lcov-report',
      'mock', // mock api dir
    ],
    // 配合 contentBase 设置了多个静态文件夹时使用（一一对应），配置使用哪个 path 访问 devServer.contentBase 同索引的静态内容
    contentBasePublicPath: [
      '/',
      '/coverage',
      '/mock',
    ],
    // publicPath: '/assets/',  //虚拟路径，映射 output.path，默认与 output.publicPath 一致，保证开发与打包的文件路径处理相同

    proxy: {
      '/api': {
        target: 'http://localhost/mock',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
      }
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    modules: ['node_modules'],
    // 若开发联调本地模块，可配置为['src', 'module', 'main']，并在本地模块的package.json增加"src":"src/index.js"配置
    mainFields: ['module', 'main'],
    // mainFields: ['src', 'module', 'main'],
    alias: {
      '{{name}}': path.resolve('./src/index')
    }
  }
};