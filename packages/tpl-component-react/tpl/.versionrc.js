module.exports = {
  silent: true,
  printError: true,
  tagPrefix: '',
  skip: {
    changelog: true,
  },
  scripts: {
    postbump: 'npx --no-install father-build',
  },
};
