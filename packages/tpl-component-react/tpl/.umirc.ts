import { defineConfig } from 'umi';
import {
  getCertPath
} from '@ali/sam';
import {
  env
} from 'process';

const https = env.HTTPS;
const cert = getCertPath();

export default defineConfig({
  logo: 'logo.png',
  // mfsu: {},
  //webpack5: {},
  fastRefresh: {},
  devtool: 'source-map',
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    https: https && cert
  },
  headScripts:[
  ],
  locales: [['zh-CN', '中文']],
  extraBabelPlugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true,
    //   },
    //   'antd',
    // ],
    // [
    //   'import',
    //   {
    //     libraryName: '@ant-design/icons',
    //     libraryDirectory: 'lib/icons',
    //     camel2DashComponentName: false,
    //   },
    //   '@ant-design/icons',
    // ],
  ],
});
