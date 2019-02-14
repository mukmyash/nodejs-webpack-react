
const webpack = require('webpack');

module.exports = function (devMode, options) {
  if (!devMode)
    return {};
  return {
    plugins:[
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: options.outputPath,
      compress: false,
      hot:true,
      open: true,
      port: 9000
    }
  };
};