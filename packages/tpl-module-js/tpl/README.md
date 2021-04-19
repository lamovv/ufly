# `{{name}}`

> {{description}}

[![Coverage Status](https://coveralls.io/repos/github/lamovv/foo/badge.svg?branch=master)](https://coveralls.io/github/lamovv/foo?branch=master)

- 配置coveralls token
  - [ADD REPO](https://coveralls.io/repos/new)，将关联的仓库置为`ON`，进入`DETAILS` 里查看`repo_token`
  - 将 `repo_token` 配置到 `.coveralls.yml`：`repo_token: ua...`

## Usage

```js
import {
  compare
} from '{{name}}';
// false
compare(2, 3);
```

## mock
1. mock内配置mock数据，如：getData.json
2. 请求接口

```js
fetch('/api/getData.json')
```

## TC
1. `__test__` 编写Test Case
2. `npm run test` 运行测试用户并生成报告
3. `npm run dev`启动server后，可访问：`http://localhost/coverage` 查看报告页面

## Dev
- 初始化环境：`npm run init`
- 启动开发：`npm run dev`
  - 自动打开浏览器：`npm run dev:open`
  - 若提示80端口被占用问题，可注掉或修改 webpack.config.js 的 port
- 编译构建：`npm run build`
- 发布：`npm run pub`
  - 发布beta包：`npm run beta`

- 打包demo：`npm run build:demo`