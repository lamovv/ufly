import { defineConfig } from 'umi';
import { getCertPath } from '@ufly/sam';
import { env } from 'process';

const https = env.HTTPS == '1';
const cert = getCertPath();

export default defineConfig({
  devtool: 'source-map',
  fastRefresh: true,
  https: https && cert,
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
