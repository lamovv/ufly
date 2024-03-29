# `{{name}}`

> {{description}}

[![Coverage Status](https://coveralls.io/repos/github/lamovv/foo/badge.svg?branch=master)](https://coveralls.io/github/lamovv/foo?branch=master)

- 配置coveralls token
  - [ADD REPO](https://coveralls.io/repos/new)，将关联的仓库置为`ON`，进入`DETAILS` 里查看`repo_token`
  - 将 `repo_token` 配置到 `.coveralls.yml`：`repo_token: ua...`
  
## Usage

```js
import {
  compareVersion
} from '{{name}}';
const r = (async () => await compareVersion('1.2.0', '1.2.1'))();
```

## mock
1. mock内配置mock数据，如：getData.json
2. 请求接口

```js
fetch('/api/getData.json')
```

## TC
1. `__test__` 编写Test Case
2. `yarn test` 运行测试用户并生成报告
3. `yarn dev`启动server后，可访问：`http://localhost/coverage` 查看报告页面

## Dev
- 初始化环境：`yarn i`
- 启动开发：`yarn dev`
  - 自动打开浏览器：`yarn dev:open`
  - 若提示80端口被占用问题，可注掉或修改 webpack.config.js 的 port
- 编译构建：`yarn build`
- 发布：`yarn pub`
  - 发布beta包：`yarn beta`