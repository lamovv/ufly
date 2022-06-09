# `{{scope}}{{name}}`

> {{description}}

[![Coverage Status](https://coveralls.io/repos/github/lamovv/foo/badge.svg?branch=master)](https://coveralls.io/github/lamovv/foo?branch=master)

- 配置coveralls token
  - [ADD REPO](https://coveralls.io/repos/new)，将关联的仓库置为`ON`，进入`DETAILS` 里查看`repo_token`
  - 将 `repo_token` 配置到 `.coveralls.yml`：`repo_token: ua...`

## Usage

```js
import {
  compare
} from '{{scope}}{{name}}';
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

## 开发步骤
1. 安装依赖

    ```bash
    yarn
    ```
2. 启动本地开发服务

    ```bash
    yarn dev
    ```

## 发包
- latest包：`$ yarn release`
  - 同时，会打git tag并提交
- alpha包：`$ yarn alpha`
- beta包：`$ yarn beta`
