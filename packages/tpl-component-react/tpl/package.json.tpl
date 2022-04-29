{
  "name": "{{scope}}{{name}}",
  "version": "{{version}}",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "main": "dist/index.js",
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
    "@commitlint/cli": "^16.2.3",
    "@commitlint/config-conventional": "^16.2.1",
    "@typescript-eslint/eslint-plugin": "^5.1.0",
    "@ufly/sam": "^1.0.1",
    "@umijs/fabric": "^2.10.2",
    "@umijs/plugin-sass": "^1.1.1",
    "babel-plugin-import": "^1.13.3",
    "cross-env": "^7.0.3",
    "dumi": "^1.1.30",
    "eslint": "^8.0.1",
    "eslint-plugin-jest": "^26.1.5",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-unicorn": "^42.0.0",
    "father-build": "^1.22.1",
    "husky": "^7.0.4",
    "lint-staged": "^12.3.7",
    "prettier": "^2.4.1",
    "standard-version": "^9.3.2"
  },
  "peerDependencies": {
    "react": ">=16",
    "react-dom": ">=16"
  },
  "scripts": {
    "i": "yarn install -s --force",
    "dev": "cross-env HTTPS=1 sam dumi",
    "build": "father-build",
    "release": "standard-version -r patch",
    "beta": "standard-version --skip.tag --prerelease beta",
    "alpha": "standard-version --skip.tag --prerelease alpha",
    "postalpha": "npm publish --tag alpha",
    "postbeta": "npm publish --tag beta",
    "postrelease": "git push --follow-tags origin master && cd dist && npm publish",
    "clear": "sam clear",
    "postpublish": "npx cnpm sync",
    "preinstall": "rm -rf dist node_modules",
    "postinstall": "husky install"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
