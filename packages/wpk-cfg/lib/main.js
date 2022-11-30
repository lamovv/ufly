'use strict';
const path = require('path');
const glob = require('glob-all');
const Config = require('webpack-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackInjectAttributesPlugin = require('html-webpack-inject-attributes-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const compile = process.env.COMPILE || 'swc';
const cssMinimizer = process.env.CSS_MINIMIZER || 'esbuild';

let publicPath = path.resolve(process.cwd(), '/build/');

const config = new Config();
const src = path.resolve(process.cwd(), 'src');

config.target('web').mode('production').devtool('source-map');

// entry
function getEntry() {
  let entries = {};
  glob.sync(['./src/pages/**/index.[tj]sx', './src/index.[tj]sx', './src/main.[tj]sx']).forEach(name => {
    let matches = name?.match(/\.\/src\/(.+?)(?:\.[tj]sx)$/i);
    if (matches) {
      entries[matches[1]] = name;
    }
  });
  return entries;
}

const entry = getEntry();
Object.keys(entry).forEach(v => {
  config.entry(v).add(entry[v]);
});
exports.entry = entry;

// output
config.output
  .set('clean', true)
  .path(path.resolve(process.cwd(), 'build'))
  .publicPath(publicPath)
  .filename('[name].js')
  .end()

  // module
  .module.when(compile === 'babel', module => {
    module
      .rule('compile')
      .test(/\.(j|t)s(x)?$/i)
      .include.add(src)
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        cacheDirectory: true,
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
      });
  })
  .when(compile === 'swc', module => {
    module
      .rule('compile')
      .test(/\.(j|t)s(x)?$/i)
      .include.add(src)
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('swc')
      .loader('swc-loader')
      .options({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            env: {
              targets: {
                chrome: 69,
              },
            },
          },
        },
      });
  })

  .rule('css')
  .test(/\.css$/i)
  // .include.add(src).end()
  .use('MiniCssExtractPlugin.loader')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .end()
  .rule('sass')
  .test(/\.(sa|sc)ss$/i)
  // .include.add(src).end()
  .use('MiniCssExtractPlugin.loader')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .end()
  .end()
  .rule('less')
  .test(/\.less$/i)
  // .include.add(src).end()
  .use('MiniCssExtractPlugin.loader')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('less-loader')
  .loader('less-loader')
  .options({ lessOptions: { javascriptEnabled: true } })
  .end()
  .end()

  .rule('asset')
  .test(/\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i)
  .type('asset')
  .parser({ dataUrlCondition: { maxSize: 1024 } })
  .end()
  .end()

  .resolve.extensions.merge(['.ts', '.tsx', '.js', '.jsx'])
  .end()
  .alias.set('@', path.resolve(process.cwd(), 'src'))
  .end()
  .end()

  .externals({
    react: 'var window.React',
    'react-dom': 'var window.ReactDOM',
  })

  .plugin('html-webpack-inject-attributes-plugin')
  .after('html')
  .use(htmlWebpackInjectAttributesPlugin, [
    {
      crossorigin: 'anonymous',
    },
  ])
  .end()

  .plugin('mini-css-extract-plugin')
  .use(MiniCssExtractPlugin)
  .end();

// plugins
Object.keys(entry).map(key => {
  config
    .plugin(`html-${key}`)
    .use(HtmlWebpackPlugin, [
      {
        filename: `${key}.html`,
        template: `./src/${key}.html`,
        inject: 'body',
        chunks: [key],
        minify: {
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
      },
    ])
    .end();
});

if (isProduction) {
  config.module
    .rule('source-map-loader')
    .test(/\.js$/)
    .pre()
    .use('source-map-loader')
    .loader('source-map-loader')
    .end()
    .end()
    .end()

    .optimization// css uglify 方式一
    .when(cssMinimizer === 'css', optimization => {
      optimization.minimizer('css').use(CssMinimizerPlugin);
    })
    // css uglify 方式二 esbuild [性能优]
    .when(cssMinimizer === 'esbuild', optimization => {
      optimization.minimizer('css').use(ESBuildMinifyPlugin, [
        {
          target: 'es2015',
          legalComments: 'none', // 去除注释
          css: true,
        },
      ]);
    })

    .splitChunks({
      chunks: 'all',
      name: 'commons',
      filename: '[name].js',
      minChunks: 2,
    })
    .end()

    .plugin('copy-webpack-plugin')
    .use(CopyPlugin, [
      {
        patterns: [{ from: 'public', to: 'public' }],
      },
    ])
    .end();
}

exports.mainChain = config;
