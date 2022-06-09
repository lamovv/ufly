module.exports = {
  'src/**/*.{ts,tsx}': ['eslint --ext .ts,.tsx --fix', 'prettier --parser=typescript --write'],
  'src/**/*.{scss,sass}': ['stylelint --fix', 'prettier --parser=scss --write'],
  'src/**/*.less': ['stylelint --fix', 'prettier --parser=less --write'],
  '*.{js,json,md}': ['prettier --write'],
};
