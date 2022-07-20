module.exports = {
  './packages/**/lib/*.js': [
    'eslint --fix',
    'prettier --write',
    'conventional-changelog -p angular -i CHANGELOG.md -s',
    'git add CHANGELOG.md',
  ],
};
