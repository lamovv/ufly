# ufly

## 概要
1. 自动检查更新

## 架构
- 通过lerna进行多包管理开发
- 模板，命名以`tpl`作为前缀，`tpl-${typeName}`
  1. 每个类型的模板，单独封装成npm包，提供依赖
  2. 模板内部处理好文件读入内存操作，方便fly调用时，直接输入配置编译模板，生成项目。

## Note
- 全局安装lerna@3：`tnpm i -g lerna@3`，方便使用lerna 相关命令工具。本项目内安装lerna@2，用于 `npm` 发包，因lerna@3 不支持`npmClient`配置。
- 子命令及参数定义：Yargs
- 用户输入交互：Inquirer
- spinner：ora
- 文字着色：chalk
- 模板处理：metalsmith、handlebars


## 目录规范
- lib：存放自建的与业务无关的封装
- vendor：存放三方库，目前来看基本用不到，都使用npm包管理

## publish
```
$ lerna publish --registry http://registry.npmjs.org
```


