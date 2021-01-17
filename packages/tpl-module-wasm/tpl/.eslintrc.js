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
  parser: '@typescript-eslint/parser', //解析器
  parserOptions: {
    sourceType: 'module', //指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块）
    // ecmaVersion: 6, //支持的ES语法版本，默认为5
    //用于指定要使用的其他些语言对象
    ecmaFeatures: {
      impliedStrict: true, //启用严格校验模式
      destructuring: true,  // 解构赋值  
      experimentalObjectRestSpread: true, //启用对象的扩展
      // jsx: true, //启用jsx语法
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  // 插件，类似于解析器，用以扩展解析器的功能，用于检测非常规的js代码，也会新增一些特定的规则
  // 配置插件时，需省略前缀「eslint-plugin-」
  plugins: [
    '@typescript-eslint'
  ],
  // 运行环境，一个环境定义了一组预定义的全局变量，为跳过对其的定义检测
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  // 全局变量，是上面env 的补充，自定义其他全局变量，为跳过对其的定义检测
  globals: {
    WebAssembly: false,
    Atomics: false,
    SharedArrayBuffer: false,
    describe: false,
    test: false,
    expect: false
  },
  // 规则继承
  /**
  * 自定义规则 @link http://eslint.cn/docs/user-guide/configuring#configuring-rules
  * 【基本使用方式】
  * off 或 0 - 关闭规则
  * warn 或 1 - 开启规则，警告级别
  * error 或 2 - 开启规则，错误级别
  * 如：'no-restricted-syntax': 0, // 表示关闭该规则
  * 如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
  * 如 'semi': ['error', 'never'], never就是额外的配置项
  */
  rules: {
    'valid-jsdoc': 0,  // 强制使用有效的 JSDoc 注释
    'no-case-declarations': 1,
    'no-debugger': 1,  // 是否禁用 debugger
    'no-console': 0,  // 是否禁用 console
    'no-control-regex': 2,  // 禁止在正则表达式中使用控制字符
    'no-invalid-regexp': 2,  // 禁止 RegExp 构造函数中无效的正则表达式字符串
    'no-regex-spaces': 2,  // 禁止正则表达式字面量中出现多个空格
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2,  // 禁止重复的 case 标签
    'no-irregular-whitespace': 2,  // 禁止在字符串和注释之外不规则的空白
    'no-obj-calls': 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用
    'valid-typeof': 2,  // 强制 typeof 表达式与有效的字符串进行比较，typeof foo === 'undefimed' 报错
    // 'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
    'curly': [2, 'all'], // 强制所有控制语句使用一致的括号风格
    'no-caller': 2,  // 禁用 arguments.caller 或 arguments.callee，'use strict'本身不允许
    'no-useless-call': 2,  // 禁止不必要的 .call() 和 .apply()
    'no-useless-concat': 2,  // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 2,  // 禁用不必要的转义字符
    'no-extra-bind': 2,  // 禁止不必要的 .bind() 调用
    'no-invalid-this': 1,  // 禁止 this 关键字出现在类和类对象之外
    'no-undef': 2, // 禁用未声明的变量，除非在 global 配置中声明
    'no-use-before-define': 0, // 不允许在变量定义之前使用它们
    'no-unused-vars': [1, {'vars': 'all', 'args': 'none'}],  // 禁止出现未使用过的变量
    'array-bracket-spacing': [2,'never'], // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],  // if while function 后面的{必须与if在同一行，java风格。
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],  // 强制在对象字面量的属性中键和值之间使用一致的间距
    'max-nested-callbacks': [1, 5],  // 强制回调函数最大嵌套深度 5层
    'no-spaced-func': 2, // 禁止 function 标识符和括号之间出现空格
    // 'indent': [2, 2], // 规范缩进
    'quotes': [2, 'single', 'avoid-escape'],  // 强制使用一致的反勾号、双引号或单引号
    'max-params': [2, 6], // 强制 function 定义中最多允许的参数数量，因为当前寄存器最多只有6个用作函数参数
    'no-empty': [2, { 'allowEmptyCatch': true }], // 禁止空块语句,catch可空
  }
};
