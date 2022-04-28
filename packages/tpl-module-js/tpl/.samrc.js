const { env } = require('process');

const https = env.HTTPS == 1;

module.exports = {
  // silent: false,
  logLevel: 'DEBUG',
  https,
  hosts: [
    'pre.my.domain.com',
    'daily.my.domain.com',
    'my.domain.com'
  ],
  path: 'demo/index.html',
  proxy: {
    port: 8800
  }
}
