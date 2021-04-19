'use strict';

import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { merge } from 'lodash';

const pkg = require('./package.json');

function genCfg(options){
  return merge({
    input: 'src/index.js',
    output: {
      
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    // 指出应将哪些模块视为外部模块
    external: id => {
      return /^@|utils-/i.test(id);
    },
    plugins: [
      alias({
        resolve: ['.js'],
        entries: {},
      }),
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-class-properties'
        ]
      }),
      replace({
        __VERSION__: pkg.version
      })
    ]
  }, options);
}

export default [
  genCfg(),
  genCfg({
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    }
  }),
  genCfg({
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: `${pkg.name}`
    }
  })
]
