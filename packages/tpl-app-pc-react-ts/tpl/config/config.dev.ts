import { defineConfig } from 'umi';
import { getCertPath } from '@ufly/sam';
import { env } from 'process';

const https = env.HTTPS == '1';
const cert = getCertPath();

export default defineConfig({
  devtool: 'source-map',
  fastRefresh: true,
  https: https && cert,
});
