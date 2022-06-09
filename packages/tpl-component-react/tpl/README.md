---
sidemenu: true
toc: content
---
# `{{scope}}{{name}}`

> {{description}}

## 如何使用

安装

```sh
yarn add {{scope}}{{name}}
```

## 基础示例
<code src="./demo/index.tsx"></code>
<API src="./src/index.tsx"></API>

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
- latest包：`$ yarn release`
- alpha包：`$ yarn alpha`
- beta包：`$ yarn beta`


