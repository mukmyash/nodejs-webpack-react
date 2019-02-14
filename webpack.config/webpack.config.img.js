
module.exports = function (devMode, options) {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
  };
};