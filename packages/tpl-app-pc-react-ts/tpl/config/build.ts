import { defineConfig } from 'umi';

// assets资源路径
const publicPath = '/'; // 根据环境变量，配置CDN路径

export default defineConfig({
  devtool: 'source-map',
  publicPath,
  targets: {
    ie: 11,
  },
  jsMinifier: 'terser', // esbuild 不兼容ie 11
  hash: true,
  theme: {
    '@primary-color': '#faad14',
  },
});
