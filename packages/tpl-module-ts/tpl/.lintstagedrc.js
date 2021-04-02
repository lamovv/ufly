module.exports = {
  './src/**/*.{ts,js}': [
    'prettier --tab-width 2 --write',
    'eslint --cache --fix',
    'conventional-changelog -p angular -i CHANGELOG.md -s',
    'git add CHANGELOG.md'
  ]
};