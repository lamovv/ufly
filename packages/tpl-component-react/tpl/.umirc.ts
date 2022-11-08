import { defineConfig } from 'umi';
import { getCertPath } from '@ufly/sam';
import { env } from 'process';

const https = env.HTTPS;
const cert = getCertPath();

export default defineConfig({
  logo: 'logo.png',
  // mfsu: {},
  webpack5: {},
  fastRefresh: {},
  devtool: 'source-map',
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    https: https && cert
  },
  headScripts:[]
});
