{
  "name": "{{name}}",
  "version": "{{version}}",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "browser": "dist/index.esm.js",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
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
    "@babel/preset-typescript": "^7.12.7",
    "@commitlint/cli": "^12.0.1",
    "@commitlint/config-conventional": "^12.0.1",
    "@rollup/plugin-alias": "^3.0.1",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^18.0.0",
    "@rollup/plugin-node-resolve": "^11.2.1",
    "@rollup/plugin-replace": "^2.4.2",
    "@types/jest": "^26.0.15",
    "@typescript-eslint/eslint-plugin": "^4.6.1",
    "@typescript-eslint/parser": "^4.6.1",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^26.6.3",
    "babel-loader": "^8.1.0",
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
    "rollup": "^2.44.0",
    "rollup-plugin-typescript2": "^0.29.0",
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
    "test": "jest --coverage && coveralls < coverage/lcov.info",
    "upgrade": "yarn upgrade-interactive --latest",
    "prepare": "husky install",
    "init": "npm run clean && rm -rf node_modules && yarn install -s --force && npm run prepare",
    "init:nolock": "npm run clean && rm -rf node_modules && yarn install -s --force --no-lockfile",
    "updatev": "standard-version --release-as patch",
    "updatev:beta": "standard-version --prerelease beta --skip.changelog --skip.tag",
    "clean": "rm -rf dist",
    "prettier": "prettier --write ./src",
    "build": "run-p clean prettier test build:es",
    "build:es": "rollup -c --silent",
    "build:umd": "cross-env NODE_FORMAT=umd rollup -c --silent",
    "build:all": "run-p build:umd build",
    "build:wpk": "cross-env NODE_ENV=production webpack --mode=production",
    "dev": "webpack serve --mode=development",
    "dev:open": "webpack serve --mode=development --open",
    "prepub": "run-s updatev build",
    "prebeta": "run-s updatev:beta build",
    "postpub": "git push --follow-tags origin master",
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
