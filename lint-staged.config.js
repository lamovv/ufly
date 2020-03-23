module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  '*.{json,md,css,ts}': ['git add'],
};