module.exports = {
  silent: true,
  tagPrefix: '',
  skip: {
    changelog: true
  },
  scripts: {
    postbump: 'npx --no-install father-build',
  }
}

