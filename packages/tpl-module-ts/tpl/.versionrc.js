module.exports = {
  silent: true,
  printError: true,
  tagPrefix: '',
  skip: {
    changelog: true,
  },
  scripts: {
    postbump: 'npm run build',
  },
};
