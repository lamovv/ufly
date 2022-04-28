module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  rules: {
    indent: ['error', 2],
    'prefer-destructuring': [
      'error',
      {
        array: false,
      },
    ],
  },
};
