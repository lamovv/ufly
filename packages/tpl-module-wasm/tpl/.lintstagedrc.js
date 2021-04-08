module.exports = {
  './src/**/*.{ts,js}': [
    'prettier --write ./src',
    'eslint --cache --fix',
    'conventional-changelog -p angular -i CHANGELOG.md -s',
    'git add CHANGELOG.md'
  ]
};