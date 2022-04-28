# `{{scope}}{{name}}`

> {{description}}

## 如何使用

安装

```sh
yarn add {{scope}}{{name}}
```

## 基础示例

```jsx
/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import {{comName}} from '{{scope}}{{name}}';

export default function Page() {
  return (
    <div>
      <{{comName}}
        text="基础示例"
        defaultValue={1}
      />
    </div>
  );
}
```

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
- alpha包：`$ yarn alpha`
- beta包：`$ yarn beta`
- release包：`$ yarn release`
  - 同时，会打git tag并提交

