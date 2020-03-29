module.exports = {
  './packages/**/lib/*.js': [
    'prettier --tab-width 2 --write',
    'eslint --fix',
    'conventional-changelog -p angular -i CHANGELOG.md -s',
    'git add CHANGELOG.md'
  ]
};