'use strict';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {
  merge
} from 'lodash';

const pkg = require('./package.json');

function genCfg(options) {
  return merge({
    input: './src/index.js',
    output: {
      file: 'dist/es/index.js',
      format: 'es',
      name: '{{name}}',
      sourcemap:false
    },
    // 指出应将哪些模块视为外部模块
    external: id => {
      return /^@ali\//i.test(id);
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env'
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }),
      replace({
        __VERSION__: JSON.stringify(pkg.version)
      })
    ]
  }, options);
}

export default [genCfg({
  input: './src/index.js'
})]
