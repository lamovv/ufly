import { defineConfig } from 'umi';
import build from './build';
import define from './define';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  // layout: {},
  model: {},
  initialState: {},
  request: {},
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    antd: true,
  },
  chainWebpack(config) {
    // // 使用 day.js 替换 moment.js
    // config
    //   .plugin('antd-dayjs-webpack-plugin')
    //   .use('antd-dayjs-webpack-plugin')
    //   .end()
  },
  ...build,
  routes,
  define,
});
