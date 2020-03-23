module.exports = {
  './packages/**/lib/*.js': [
    'prettier --tab-width 2 --write', 
    'eslint --fix'
  ]
};