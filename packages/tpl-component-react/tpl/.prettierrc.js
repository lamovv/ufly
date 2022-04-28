const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  root: true,
  semi: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  quoteProps: 'as-needed',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  endOfLine: 'lf',
};