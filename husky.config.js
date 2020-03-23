module.exports = {
  hooks: {
    'pre-commit': [
      'lint-staged',
      'conventional-changelog -p angular -i CHANGELOG.md -s',
      'git add CHANGELOG.md'
    ],
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  }
};