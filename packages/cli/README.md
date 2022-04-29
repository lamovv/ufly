# `@ufly/cli`

> Use the ufly command line tools to quickly create a dev env for modules and app.  module （js/ts、AssemblyScript 2 Wasm） 开发组件发布npm/yarn包、基于 lerna 开发项目、App开发项目 的 cli，包括代码检查/格式修正、git commit规范校验、changelog自动生成，以及dev、build、push、pub等 cmd.

## Usage
全局安装

```bash
$ npm i -g @ufly/cli yarn
```

主命令：ufly

```bash
//查看使用帮助
$ ufly -h

// 创建项目前配置一下yarn包源，初始化安装依赖时会快很多，或使用 `yrm`/`nrm` 管理仓库源
$ yarn config set registry https://registry.npmmirror.com

//创建
$ ufly init
```
