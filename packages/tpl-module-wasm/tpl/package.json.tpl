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
    "@babel/core": "^7.12.10",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-modules-commonjs": "^7.12.1",
    "@babel/plugin-transform-runtime": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "assemblyscript-wasm-loader": "^0.2.0",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "console-log-h5": "^1.1.1",
    "conventional-changelog-cli": "^2.1.1",
    "coveralls": "^3.1.0",
    "cross-env": "^7.0.2",
    "eslint": "^7.17.0",
    "eslint-loader": "^4.0.2",
    "husky": "^4.3.7",
    "ip": "^1.1.5",
    "jest": "^26.6.3",
    "lint-staged": "^10.5.3",
    "lodash": "^4.17.15",
    "npm-run-all": "^4.1.5",
    "ts-jest": "^26.4.4",
    "typescript": "^4.1.3",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "./src/**/*.{ts,js}": [
      "eslint --cache --fix",
      "conventional-changelog -p angular -i CHANGELOG.md -s",
      "git add CHANGELOG.md"
    ]
  },
  "scripts": {
    "test": "run-s build jest",
    "jest": "jest --coverage && coveralls < coverage/lcov.info",
    "clean": "rm -rf dist",
    "upgrade": "yarn upgrade-interactive --latest",
    "init": "npm run clean && rm -rf node_modules && yarn install -s --force",
    "init:nolock": "npm run clean && rm -rf node_modules && yarn install -s --force --no-lockfile",
    "build": "rm -rf dist & cross-env NODE_ENV=production webpack --mode=production",
    "dev": "webpack-dev-server --config webpack.config.demo.js --watch --mode=development",
    "dev:open": "webpack-dev-server --config webpack.config.demo.js --watch --mode=development --open",
    "postversion": "git push --follow-tags",
    "prepublishOnly": "npm run build",
    "push": "sh ./publish.sh -pm",
    "pub": "sh ./publish.sh -npm"
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}