{
  "name": "{{name}}",
  "version": "{{version}}",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "browser": "dist/index.es.js",
  "main": "dist/index.cjs.js",
  "module": "dist/index.es.js",
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
    "@babel/core": "^7.9.0",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.9.0",
    "@babel/preset-env": "^7.9.0",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@rollup/plugin-alias": "^3.0.1",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^11.0.2",
    "@rollup/plugin-node-resolve": "^7.1.1",
    "@rollup/plugin-replace": "^2.3.1",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "console-log-h5": "^1.0.6",
    "conventional-changelog-cli": "^2.1.1",
    "cross-env": "^7.0.2",
    "eslint": "^6.8.0",
    "eslint-loader": "^3.0.3",
    "husky": "^4.2.3",
    "lodash": "^4.17.15",
    "ip": "^1.1.5",
    "lint-staged": "^10.0.9",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.0.2",
    "rollup": "^2.1.0",
    "typescript": "^3.8.3",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
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
    "upgrade": "yarn upgrade-interactive --latest",
    "2git": "npm repo",
    "init": "npm run clean && rm -rf node_modules && yarn install -s --force",
    "init:nolock": "npm run clean && rm -rf node_modules && yarn install -s --force --no-lockfile",
    "build": "run-p prettier build:es build:types",
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
    "pub": "npm run build && sh ./publish.sh -npm"
  }
}