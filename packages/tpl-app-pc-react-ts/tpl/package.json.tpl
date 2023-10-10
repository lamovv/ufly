{
  "name": "{{name}}",
  "version": "{{ version }}",
  "description": "> {{ description }}",
  "keywords": [
    "{{keywords}}"
  ],
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "browser": "dist/index.umd.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "author": {
    "name": "{{ author }}",
    "email": "{{ email }}"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "{{repository}}"
  },
  "devDependencies": {
    "@ufly/wfc": "^1.0.9",
    "@types/browser-update": "^3.3.0",
    "@types/js-cookie": "^3.0.2",
    "@types/react": "^17",
    "react-dev-inspector": "^1.6.0",
    "antd-dayjs-webpack-plugin": "^1.0.6",
    "babel-plugin-import": "^1.13.3",
    "koa": "^2.13.4",
    "koa-static": "^5.0.0"
  },
  "resolutions": {
    "umi": ">=4",
    "postcss-scss": "^3"
  },
  "dependencies": {
    "@ant-design/pro-layout": "^7.1.0",
    "@umijs/hooks": "^1.9.3",
    "@umijs/max": "^4.0.25",
    "antd": "^4.23.2",
    "browser-update": "^3.3.38",
    "cssjson": "^2.1.3",
    "js-cookie": "^3.0.1"
  },
  "scripts": {
    "newbranch": "standard-version -r patch",
    "dev": "cross-env UMI_ENV=dev sam max dev",
    "build": "max build",
    "i": "rm -rf dist && yarn install -s --force",
    "postinstall": "wfc install & max setup",
    "preview": "cross-env HTTPS=1 sam dev",
    "predaily": "(if [ -n \"$(git status -s)\" ];then\ngit add . -A\ncz\ngit push\nfi)",
    "daily": "",
    "release": ""
  }
}
