# `@ufly/cli`

> Use the ufly command line tools to quickly create a dev env for modules and app.

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
$ yarn config set registry=https://registry.npmmirror.com

//创建
$ ufly init
```
