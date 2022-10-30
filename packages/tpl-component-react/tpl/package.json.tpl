{
  "name": "{{scope}}{{name}}",
  "version": "{{version}}-beta.0",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "license": "MIT",
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
    "@commitlint/cli": "^17.0.0",
    "@commitlint/config-conventional": "^17.0.0",
    "@commitlint/cz-commitlint": "^17.0.0",
    "@typescript-eslint/eslint-plugin": "^5.25.0",
    "@typescript-eslint/parser": "^5.25.0",
    "@ufly/sam": "^1.0.15",
    "@umijs/fabric": "^2.11.1",
    "@umijs/plugin-sass": "^1.1.1",
    "babel-plugin-import": "^1.13.3",
    "commitizen": "^4.2.4",
    "cross-env": "^7.0.3",
    "dumi": "^1.1.30",
    "eslint": "^8.15.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-jest": "^26.2.2",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "eslint-plugin-unicorn": "^42.0.0",
    "father-build": "^1.22.1",
    "husky": "^8.0.1",
    "lint-staged": "^12.4.1",
    "postcss-less": "^6.0.0",
    "prettier": "^2.6.2",
    "standard-version": "^9.3.2",
    "stylelint": "^14.8.2",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recess-order": "^3.0.0",
    "stylelint-config-standard-scss": "^3.0.0",
    "typescript": "^4.6.4"
  },
  "resolutions": {
    "postcss-scss": "^3"
  },
  "peerDependencies": {
    "react": ">=16",
    "react-dom": ">=16"
  },
  "scripts": {
    "i": "yarn install -s --force",
    "dev": "cross-env HTTPS=1 sam dumi",
    "build": "father-build",
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
