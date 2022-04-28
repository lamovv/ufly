{
  "name": "{{name}}",
  "version": "{{version}}",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "author": "{{author}}<{{email}}>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "{{repository}}"
  },
  "engines": {
    "node": ">=10.15.3"
  },
  "devDependencies": {
    "@babel/core": "^7.13.14",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-modules-commonjs": "^7.12.1",
    "@babel/plugin-transform-runtime": "^7.13.10",
    "@babel/preset-env": "^7.13.12",
    "@commitlint/cli": "^12.0.1",
    "@commitlint/config-conventional": "^12.0.1",
    "assemblyscript-wasm-loader": "^0.2.0",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "clean-before-html-webpack-plugin": "^1.0.1",
    "cnpm": "^6.1.1",
    "console-log-h5": "^1.1.1",
    "conventional-changelog-cli": "^2.1.1",
    "coveralls": "^3.1.0",
    "cross-env": "^7.0.2",
    "css-loader": "^5.2.0",
    "eslint": "^7.23.0",
    "eslint-loader": "^4.0.2",
    "html-webpack-plugin": "^5.3.1",
    "husky": "^6.0.0",
    "ip": "^1.1.5",
    "jest": "^26.6.3",
    "lint-staged": "^10.5.3",
    "lodash": "^4.17.15",
    "mini-css-extract-plugin": "^1.4.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.0.2",
    "sass": "^1.32.8",
    "sass-loader": "11.0.1",
    "standard-version": "^9.1.1",
    "style-loader": "^2.0.0",
    "ts-jest": "^26.5.4",
    "typescript": "^4.2.3",
    "webpack": "^5.28.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2"
  },
  "scripts": {
    "test": "run-s build jest",
    "jest": "jest --coverage && coveralls < coverage/lcov.info",
    "upgrade": "yarn upgrade-interactive --latest",
    "prepare": "husky install",
    "i": "npm run clean && rm -rf node_modules && yarn install -s --force && npm run prepare",
    "updatev": "standard-version --release-as patch",
    "updatev:beta": "standard-version --prerelease beta --skip.changelog --skip.tag",
    "clean": "rm -rf dist",
    "prettier": "prettier --write ./src",
    "build": "npm run clean & cross-env NODE_ENV=production webpack --mode=production",
    "dev": "webpack serve --config webpack.config.demo.js --mode=development",
    "dev:open": "webpack serve --config webpack.config.demo.js --mode=development --open",
    "prepub": "run-s updatev build",
    "prebeta": "run-s updatev:beta build",
    "postpub": "git push --follow-tags",
    "publatest": "npm publish --access=public",
    "pubeta": "npm publish --access=public --tag beta",
    "pub": "run-s publatest sync",
    "beta": "run-s pubeta sync",
    "sync": "cnpm sync"
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}