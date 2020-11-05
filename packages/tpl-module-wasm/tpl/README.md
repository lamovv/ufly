# `{{name}}`

> {{description}}

## Usage

```js
import {
  foo
} from '{{name}}';

foo();
```

## Dev
1. 默认使用`yarn`安装npm包，若无请先安装：`$ npm i -g yarn`
2. 初始化环境：`npm run init`
3. 启动开发服务：`$ npm run dev`
  - 自动打开浏览器：`$ npm run dev:open`
4. 构建：`$ npm run build`
5. 提交git：`npm run push -- commit-message`
  - commit-message：替换为git commit提交时的message
  - **message格式参照 `commitlint.config` 规范提交**
6. 提交git并发布npm包：`npm run pub -- commit-message`
  - 指定版本位(patch|minor|major)，默认为patch，自动+1：`npm run pub -- commit-message -v minor`