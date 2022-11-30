# `wpk-cfg`

> webpack config

## Usage

```js
const { entry, mainChain, devChain } = require('@ufly/wpk-cfg');

const isProduction = process.env.NODE_ENV == 'production';

if (isProduction) {
  const publicPath = '/dist/';
  mainChain
    .output
    .publicPath(publicPath)
    .end()
} else {
  const cert = {
    //...
  };
  devChain.devServer.https(cert);
}

const webpackChain = isProduction ? mainChain : devChain;
const config = webpackChain.toConfig();

module.exports = config;
```

##### 支持的环境变量

- `COMPILE=swc|babel`：指定编译器
  - `swc`【默认值】，使用 `swc-loader`
  - `babel`，使用 `babel-loader`

- `CSS_MINIMIZER=esbuild|css`：指定 CSS minimizer
  - `esbuild`【默认值】，使用 `ESBuildMinifyPlugin`
  - `css`，使用 `css-minimizer-webpack-plugin`

示例如下：

```json
{
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack --mode=production",
    
    "dev": "cross-env CSS_MINIMIZER=css COMPILE=babel sam webpack serve",
    "build": "cross-env NODE_ENV=production CSS_MINIMIZER=css COMPILE=babel webpack --mode=production",
  }
}
```
