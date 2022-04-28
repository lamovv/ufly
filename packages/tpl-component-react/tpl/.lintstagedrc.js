module.exports = {
  './src/**/*.{ts,tsx}': ['prettier --parser=typescript --write', 'eslint --cache --fix'],
  '*.{js,jsx,scss,sass,md,json}': ['prettier --write'],
};
