const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV != 'development';

module.exports = {
  context: __dirname,
  devtool: 'source-map',//'cheap-module-source-map' | cheap-module-eval-source-map
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs-module', // ES2015 module wrapped in CommonJS
    library: pkg.name
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
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main']
  }
};