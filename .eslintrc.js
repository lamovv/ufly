module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  env: {
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      destructuring: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
  },
};