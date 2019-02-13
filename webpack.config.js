
const merge = require('webpack-merge');
const path = require('path');
const all_config = require('./webpack.config/webpack.config.all');


module.exports = function (env, argv) {
  const options = {
    outputPath: path.resolve(__dirname, 'dist'),
    appName: 'AV',
  }

  const devMode = env ? !env.prod : true;
  console.log('--------------------------------------------------------------------------------------');
  console.log('--------------------------------------' + (devMode ? 'DEVELOPMENT' : 'PRODUCTION') + '--------------------------------------');
  console.log('--------------------------------------------------------------------------------------');
  return merge([{
    devtool: devMode ? 'eval' : 'source-maps',
    mode: devMode ? 'development' : 'production',
    entry: {
      main: './src/index.tsx'
    },
    output: {
      path: options.outputPath,
      filename: devMode ? '[name].js' : '[name].[hash].js'
    },
  },
  all_config(devMode, options)]);
}