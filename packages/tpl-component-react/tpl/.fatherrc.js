export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: '{{name}}',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
};
