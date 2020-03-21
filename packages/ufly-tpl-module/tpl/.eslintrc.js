/**
 * eslint有三种使用方式
 * 【1】js代码中通过注释的方式使用
 * 【2】通过webpack的eslintConfig字段设置，eslint会自动搜索项目的package.json文件中的配置
 * 【3】通过配置文件的方式使用，配置文件有多种文件方式，如JavaScript、JSON 或者 YAML等
 *
 * 文件忽略
 * 【】让eslint跳过特定文件的检测
 * 【】通过当前工作目录下 「.eslintignore」 文件进行设置
 *  其使用的是Glob路径书写方式，与「.gitignore」的使用方法相同
 * 【】也可以在 package.json 文件中，通过 eslintIgnore 参数进行设置
 *
 * 文件内局部设置
 * 【】eslint可以具体文件中设置特定代码的规则，常用于跳过某条语句的检测。
 * 【】注销全部规则，在代码前新建一行，添加注销 /* eslint-disable *\/  。如果没有恢复设置的语句，则下列全部代码都会跳过检测。
 * 【】恢复eslint，在代码前新建一行，添加注销 /* eslint-enable *\/
 * 【】指定忽略的规则，/* eslint-disable no-alert, no-console *\/
 * 【】在特定行禁用，// eslint-disable-line
 * 【】在下一行禁用，// eslint-disable-next-line
 */

module.exports = {
  // 根目录标识
  root: true, // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找
  parser: 'babel-eslint', //解析器
  parserOptions: {
    sourceType: 'module', //指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块）
    // ecmaVersion: 6, //支持的ES语法版本，默认为5
    //用于指定要使用的其他些语言对象
    ecmaFeatures: {
      impliedStrict: true, //启用严格校验模式
      experimentalObjectRestSpread: true, //启用对对象的扩展
      // jsx: true, //启用jsx语法
    },
  },
  // 运行环境，一个环境定义了一组预定义的全局变量，为跳过对其的定义检测
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  // 全局变量，是上面env 的补充，自定义其他全局变量，为跳过对其的定义检测
  globals: {
  },
  // 插件，类似于解析器，用以扩展解析器的功能，用于检测非常规的js代码，也会新增一些特定的规则
  // 配置插件时，需省略前缀「eslint-plugin-」
  plugins: [],
  // 规则继承
  extends: [],
  /**
  * 自定义规则 @link http://eslint.cn/docs/user-guide/configuring#configuring-rules
  * 【基本使用方式】
  * "off" 或者0 关闭规则
  * "warn" 或者1 将规则打开为警告（不影响退出代码）
  * "error" 或者2 将规则打开为错误（触发时退出代码为1）
  * 如：'no-restricted-syntax': 0, // 表示关闭该规则
  * 如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
  * 如 'semi': ['error', 'never'], never就是额外的配置项
  */
  rules: {},
};
