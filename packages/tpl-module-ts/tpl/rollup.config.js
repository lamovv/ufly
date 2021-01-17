'use strict';

import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { merge } from 'lodash';

const pkg = require('./package.json');

function genCfg(options){
  return merge({
    input: 'src/index.ts',
    output: {
      
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: false
    },
    // 指出应将哪些模块视为外部模块
    external: id => {
      return /^@|utils-/i.test(id);
    },
    plugins: [
      alias({
        resolve: ['.ts'],
        entries: {},
      }),
      resolve(),
      commonjs(),
      typescript(),
      replace({
        __VERSION__: pkg.version
      })
    ]
  }, options);
}

const useUmd = process.env.NODE_FORMAT == 'umd';
export default useUmd ? 
  genCfg({
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: `${pkg.name}`
    }
  }): [
    genCfg(),
    genCfg({
      output: {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      }
    })
  ]
