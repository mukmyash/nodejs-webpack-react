const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = function (devMode, options) {
  if (devMode)
    return {};

  const pathsToClean = [options.outputPath];
  const cleanOptions = { root: path.join(__dirname, '..'), verbose: true, dry: false, };

  return {
    plugins: [
      new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
  };
};