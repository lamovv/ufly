{
  "name": "{{scope}}{{name}}",
  "version": "{{version}}-beta.0",
  "description": "> {{description}}",
  "keywords": [
    "{{keywords}}"
  ],
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "browser": "dist/index.umd.js",
  "types": "dist/index.d.ts",
  "license": "BSD",
  "files": [
    "dist"
  ],
  "author": "{{author}}<{{email}}>",
  "repository": {
    "type": "git",
    "url": "{{repository}}"
  },
  "devDependencies": {
    "@ufly/wfc": "^1.0.9",
    "@types/react": ">=17",
    "@umijs/fabric": "^3.0.0",
    "@umijs/plugin-sass": "^1.1.1",
    "antd": "^4.24.1",
    "babel-plugin-import": "^1.13.5",
    "dumi": "^1.1.49",
    "father-build": "^1.22.5",
    "standard-version": "^9.5.0"
  },
  "resolutions": {
    "react": ">=17",
    "postcss-scss": "^3",
    "stylelint": "^14",
    "stylelint-config-standard": "^29"
  },
  "dependencies": {
    "@uhooks/use-value": "^1.0.1",
    "classnames": "^2.3.2",
    "react": ">=17"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
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
    "postinstall": "wfc install || true"
  }
}
