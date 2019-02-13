var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (devMode, options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: options.appName,
        template: 'src/index.template.html'
      })
    ]
  };
};