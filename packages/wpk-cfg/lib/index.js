const { mainChain, entry } = require('./main');
const devChain = require('./dev');

module.exports = {
  entry,
  mainChain,
  devChain,
};
