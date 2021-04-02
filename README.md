# `@ufly/cli`

> Use the ufly command line tool to quickly create modules and app for dev. module 开发项目（js/ts、AssemblyScript 2 Wasm）、基于 lerna 开发项目、App开发项目 的 cli，包括代码检查/格式修正、git commit规范校验、changelog自动生成，以及dev、build、push、pub等 cmd

![](./ufly.png)

## Usage
@ufly/cli 脚本命令自动检测更新升级，目前支持创建基于JS、TS、AssemblyScript开发wasm 三语言的模块开发。将本地开发(dev)、npm包发布(pub)与代码管理(git)做到了简易命令化、规范化。同时，结合 git hook、prettier、eslint、commitlint等将代码格式化、校验、规范commit、记录changelog与发包版本处理等自动化。


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
4. 配置coveralls token
  - [ADD REPO](https://coveralls.io/repos/new)，将关联的仓库on，details里查看token
  - 将 repo_token 复制进 `.coveralls.yml`：`repo_token: ua...`

## Dev
1. debug模式启动：`npm run debug`
2. 打开Chrome调试：`chrome://inspect`，点击 inspect，打开 devtools