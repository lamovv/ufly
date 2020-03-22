# {{name}}
> {{description}}

## Usage

```js
import {
  foo
} from '{{name}}';

foo();
```

## Dev
1. 安装依赖：`$ yarn`
2. 启动开发服务：`$ npm run dev`
  - 打开浏览器：`$ npm run dev:open`
3. 构建：`$ npm run build`

## Dev
- 编译：`npm run build`
- 提交：`npm run push -- commit-message`
- 发布：`npm run pub -- commit-message`
  - 指定版本位，默认为patch，自动+1：`npm run pub -- commit-message -v minor`