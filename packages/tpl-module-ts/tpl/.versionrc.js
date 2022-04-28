module.exports = {
  silent: true,
  tagPrefix: '',
  skip: {
    changelog: true
  },
  scripts: {
    postbump: 'git add . -A',
    postcommit: 'node git.js',
  }
}

