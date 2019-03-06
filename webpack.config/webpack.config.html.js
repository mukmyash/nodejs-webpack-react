var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = function (devMode, options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: options.appName,
        template: path.resolve(options.srcPath, 'index.template.html'),
        filename: options.htmlOutputName
      })
    ]
  };
};