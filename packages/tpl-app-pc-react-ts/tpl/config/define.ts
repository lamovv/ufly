const isProd = process.env.NODE_ENV === 'production';

export default {
  DEBUG: !isProd,
};
