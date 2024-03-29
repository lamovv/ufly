{
  "name": "{{scope}}{{name}}",
  "version": "{{version}}-beta.0",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "browser": "dist/index.umd.js",
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
  "devDependencies": {
    "@babel/core": "^7.13.14",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-modules-commonjs": "^7.12.1",
    "@babel/plugin-transform-runtime": "^7.13.10",
    "@babel/preset-env": "^7.13.12",
    "@babel/preset-typescript": "^7.12.7",
    "@commitlint/cli": "^16.2.4",
    "@commitlint/config-conventional": "^16.2.4",
    "@commitlint/cz-commitlint": "^16.2.4",
    "@rollup/plugin-alias": "^3.0.1",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^22.0.0",
    "@rollup/plugin-node-resolve": "^13.2.1",
    "@rollup/plugin-replace": "^4.0.0",
    "@types/jest": "^26.0.15",
    "@typescript-eslint/eslint-plugin": "^5.25.0",
    "@typescript-eslint/parser": "^5.25.0",
    "@ufly/sam": "^1.0.15",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^26.6.3",
    "babel-loader": "^8.1.0",
    "clean-before-html-webpack-plugin": "^1.0.1",
    "commitizen": "^4.2.4",
    "console-log-h5": "^1.1.1",
    "conventional-changelog-cli": "^2.1.1",
    "coveralls": "^3.1.0",
    "cross-env": "^7.0.2",
    "css-loader": "^6.7.1",
    "eslint": "^8.15.0",
    "eslint-loader": "^4.0.2",
    "html-webpack-plugin": "^5.3.1",
    "husky": "^8.0.1",
    "jest": "^26.6.3",
    "lint-staged": "^12.4.1",
    "lodash": "^4.17.15",
    "mini-css-extract-plugin": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.6.2",
    "rollup": "^2.44.0",
    "rollup-plugin-typescript2": "^0.31.2",
    "sass": "^1.32.8",
    "sass-loader": "12.6.0",
    "standard-version": "^9.3.2",
    "style-loader": "^3.3.1",
    "ts-jest": "^26.5.4",
    "typescript": "^4.2.3",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.8.1"
  },
  "scripts": {
    "test": "jest --coverage && coveralls < coverage/lcov.info",
    "i": "yarn install -s --force",
    "dev": "cross-env HTTPS=1 sam webpack serve --mode=development",
    "build": "rm -rf dist && yarn test && rollup -c --silent",
    "build:demo": "cross-env NODE_ENV=production webpack --mode=production",
    "release": "(if [ -n \"$(git status -s)\" ];then\ngit add . -A\ncz\nfi) && standard-version -r patch && git push --follow-tags origin master && npm publish",
    "beta": "standard-version --skip.tag --skip.commit -p beta",
    "postbeta": "npm publish --tag beta",
    "alpha": "standard-version --skip.tag --skip.commit -p alpha",
    "postalpha": "npm publish --tag alpha",
    "postinstall": "husky install || true"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
