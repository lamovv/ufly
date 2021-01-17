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
    "@babel/core": "^7.12.10",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-modules-commonjs": "^7.12.1",
    "@babel/plugin-transform-runtime": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@rollup/plugin-alias": "^3.0.1",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^17.0.0",
    "@rollup/plugin-node-resolve": "^11.0.1",
    "@rollup/plugin-replace": "^2.3.1",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^26.6.3",
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
    "prettier": "^2.0.2",
    "rollup": "^2.36.2",
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
      "prettier --tab-width 2 --write",
      "eslint --cache --fix",
      "conventional-changelog -p angular -i CHANGELOG.md -s",
      "git add CHANGELOG.md"
    ]
  },
  "scripts": {
    "test": "jest --coverage && coveralls < coverage/lcov.info",
    "upgrade": "yarn upgrade-interactive --latest",
    "init": "npm run clean && rm -rf node_modules && yarn install -s --force",
    "init:nolock": "npm run clean && rm -rf node_modules && yarn install -s --force --no-lockfile",
    "build": "run-p prettier test  build:es build:types && rm ./dist/index.js",
    "build:es": "rm -rf dist && rollup -c --silent",
    "build:umd": "cross-env NODE_FORMAT=umd rollup -c --silent",
    "build:all": "run-p build build:umd",
    "build:types": "tsc",
    "build:wpk": "cross-env NODE_ENV=production webpack --mode=production",
    "clean": "rm -rf dist",
    "dev": "webpack-dev-server --watch --mode=development",
    "dev:open": "webpack-dev-server --watch --mode=development --open",
    "postversion": "git push --follow-tags",
    "prettier": "prettier --write ./src",
    "push": "sh ./publish.sh -pm",
    "prepublishOnly": "npm run build",
    "pub": "sh ./publish.sh -npm"
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}