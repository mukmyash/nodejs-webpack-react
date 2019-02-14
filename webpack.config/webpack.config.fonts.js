module.exports = function (devMode, options) {
  return {
    module: {
      rules: [ {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }]
    }
  };
};