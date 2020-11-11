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
    "@babel/preset-typescript": "^7.9.0",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@rollup/plugin-alias": "^3.0.1",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^16.0.0",
    "@rollup/plugin-node-resolve": "^10.0.0",
    "@rollup/plugin-replace": "^2.3.1",
    "@types/jest": "^26.0.15",
    "@typescript-eslint/eslint-plugin": "^4.6.1",
    "@typescript-eslint/parser": "^4.6.1",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "console-log-h5": "^1.0.6",
    "conventional-changelog-cli": "^2.0.31",
    "cross-env": "^7.0.2",
    "eslint": "^7.13.0",
    "eslint-loader": "^4.0.2",
    "husky": "^4.2.3",
    "ip": "^1.1.5",
    "jest": "^26.6.3",
    "lint-staged": "^10.0.9",
    "lodash": "^4.17.15",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.0.2",
    "rollup": "^2.6.1",
    "rollup-plugin-typescript2": "^0.29.0",
    "ts-jest": "^26.4.3",
    "typescript": "^4.0.5",
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
    "test": "jest",
    "init": "npm run clean && rm -rf node_modules && yarn install -s --force",
    "init:nolock": "npm run clean && rm -rf node_modules && yarn install -s --force --no-lockfile",
    "build": "run-p prettier test build:es",
    "build:es": "rm -rf dist && rollup -c --silent",
    "build:umd": "cross-env NODE_FORMAT=umd rollup -c --silent",
    "build:all": "run-p build:umd build",
    "prettier": "prettier --write ./src",
    "build:wpk": "cross-env NODE_ENV=production webpack --mode=production",
    "clean": "rm -rf dist",
    "dev": "webpack-dev-server --watch --mode=development",
    "dev:open": "webpack-dev-server --watch --mode=development --open",
    "postversion": "git push --follow-tags",
    "push": "sh ./publish.sh -pm",
    "pub": "npm run build && sh ./publish.sh -npm"
  }
}
