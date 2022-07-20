const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  semi: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  endOfLine: 'lf',
};
