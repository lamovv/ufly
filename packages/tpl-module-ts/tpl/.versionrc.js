module.exports = {
  silent: true,
  tagPrefix: '',
  skip: {
    changelog: true
  },
  scripts: {
    postbump: 'npm run build',
  }
}

