module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [  // 使用的推荐规则
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    require.resolve('@umijs/fabric/dist/eslint'),
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: 2,
    indent: [2, 2],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, {'args': 'none'}],
    'no-console': 1,
    'prettier/prettier': 2,
    'prefer-destructuring': [
      'error',
      {
        array: false,
      },
    ],
  },
  settings:  {
    react:  {
      version:  'detect',  // eslint-plugin-react 检测 React 版本
    },
  }
};
