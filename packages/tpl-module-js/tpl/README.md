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
4. 构建：
  - 默认构建cjs与es6 module：`$ npm run build`
  - 若只构建umd：`$ npm run build:umd`
    - 同时，需要手动修改`package.json` main字段指向`dist/index.umd.js`
  - 若全部构建：`$ npm run build:all`
5. 要使用命令一步完成git push提交：`$ npm run push -- commit-message`
  - `commit-message`：为git commit提交时的message，自行输入
  - 如：`$ npm run push -- "feat(scope): add yy"`
  - **message格式参照 `commitlint.config.js` 规范提交**
6. 提交git并发布npm包：`npm run pub -- commit-message`
  - 指定版本位(patch|minor|major)，默认为patch，自动+1：`npm run pub -- commit-message -v minor`