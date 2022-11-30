module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parser: '@babel/eslint-parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  env: {
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      destructuring: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  /**
   * off 或 0 - 关闭规则
   * warn 或 1 - 开启规则，警告级别
   * error 或 2 - 开启规则，错误级别
   */
  rules: {
    'valid-jsdoc': 1, // 强制使用有效的 JSDoc 注释
    'no-debugger': 1, // 是否禁用 debugger
    'no-console': 0, // 是否禁用 console
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中无效的正则表达式字符串
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止重复的 case 标签
    'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
    'no-obj-calls': 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较，typeof foo === "undefimed" 报错
    'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
    curly: [2, 'all'], // 强制所有控制语句使用一致的括号风格
    'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee，'use strict'本身不允许
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-concat': 2, // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 2, // 禁用不必要的转义字符
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-invalid-this': 1, // 禁止 this 关键字出现在类和类对象之外
    'no-undef': 2, // 禁用未声明的变量，除非在 global 配置中声明
    'no-use-before-define': 0, // 不允许在变量定义之前使用它们
    'no-unused-vars': [2, { vars: 'all', args: 'none' }], // 禁止出现未使用过的变量
    'array-bracket-spacing': [2, 'never'], // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // if while function 后面的{必须与if在同一行，java风格。
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'max-nested-callbacks': [1, 5], // 强制回调函数最大嵌套深度 5层
    'no-spaced-func': 2, // 禁止 function 标识符和括号之间出现空格
    indent: [2, 2, {
      ignoredNodes: ['ConditionalExpression'],
      VariableDeclarator: 'first',
      MemberExpression: 1,
    }], // 规范缩进
    quotes: [2, 'single', 'avoid-escape'], // 强制使用一致的反勾号、双引号或单引号
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],  // 规范一元运算符，只在循环中使用
  },
};
