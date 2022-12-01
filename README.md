# `@ufly/cli`

> Use the ufly command line tool to quickly create modules and app for dev. 
> 创建 module（js/ts、AssemblyScript 2 Wasm）、Monorepo、webApp 的开发模板，完善的工作流保障，包括一键启动dev开发环境、代码规范检查与修正eslint/stylelint、代码格式化prettier、git规范校验、changelog生成，以及简捷的 npm包 发布命令等

![](./ufly.png)

## Usage
@ufly/cli 命令会自动检查更新、升级...

全局安装

```bash
$ npm i -g @ufly/cli yarn
```

主命令：ufly

```bash
//查看使用帮助
$ ufly -h

## 创建 module 或 app
1. 在 git 创建新 repository：[Create a new repository](https://github.com/new)
2. Clone 到本地
3. 初始化项目：

  ```sh
  $ cd repo
  $ ufly init
  ```

  在初始化项目前，可执行命令检测下自己的yarn仓库源：`yarn config get registry`，建议切换国内源提升依赖安装效率：`yarn config set registry https://registry.npmmirror.com`

4. 配置coveralls token
  - [ADD REPO](https://coveralls.io/repos/new)，将关联的仓库on，details里查看token
  - 将 repo_token 复制进 `.coveralls.yml`：`repo_token: ua...`

## Dev
1. debug模式启动：`npm run debug`
2. 打开Chrome调试：`chrome://inspect`，点击 inspect，打开 devtools
