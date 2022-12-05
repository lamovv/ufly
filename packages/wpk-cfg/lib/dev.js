'use strict';
const { join } = require('path');
const { env } = require('process');
const { mainChain: webpackChain } = require('./main');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = env.NODE_ENV == 'production';
const compile = process.env.COMPILE || 'swc';

if (!isProduction) {
  const https = env.HTTPS == 1;

  webpackChain
    .target(['web', 'es6'])
    .mode('development')
    .devtool('cheap-module-source-map')
    // 融合Sam 配置
    .devServer.allowedHosts.clear()
    .end()
    .set('allowedHosts', 'all')
    .set('server', {
      type: `http${https ? 's' : ''}`,
    })
    .set('client', {
      overlay: {
        errors: true,
        warnings: false,
      },
    })
    .set('static', [
      { directory: join(process.cwd(), 'dist') },
      { directory: join(process.cwd(), 'build') },
      { directory: join(process.cwd(), 'public') },
    ])
    .end()

    .module.when(compile === 'babel', module => {
      module
        .rule('compile')
        .use('babel')
        .tap(options => {
          if (options.plugins) {
            options.plugins.push('react-refresh/babel');
          } else {
            options.plugins = ['react-refresh/babel'];
          }
          return options;
        });
    })
    .when(compile === 'swc', module => {
      module
        .rule('compile')
        .use('swc')
        .tap(options => {
          options.jsc.transform = {
            react: {
              development: true,
              refresh: true,
            },
          };
          return options;
        });
    })
    .end()

    .plugin('react-refresh-webpack-plugin')
    .use(ReactRefreshWebpackPlugin)
    .end();
}

module.exports = webpackChain;
