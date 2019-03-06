
const merge = require('webpack-merge');
const path = require('path');
const all_config = require('./webpack.config/webpack.config.all');


module.exports = function (env, argv) {
  const options = {
    srcPath: 'src',
    outputPath: path.resolve(__dirname, 'wwwroot', 'dist'),
    appName: 'AV',
    htmlOutputName: 'index.html'
  }

  const devMode = env ? !env.prod : true;
  console.log('--------------------------------------------------------------------------------------');
  console.log('--------------------------------------' + (devMode ? 'DEVELOPMENT' : 'PRODUCTION') + '--------------------------------------');
  console.log('--------------------------------------------------------------------------------------');
  return merge([{
    devtool: devMode ? 'inline-source-map' : 'source-maps',
    mode: devMode ? 'development' : 'production',
    entry: {
      main: path.resolve(__dirname, options.srcPath, 'index.tsx'),
    },
    output: {
      publicPath: '/',
      path: options.outputPath,
      filename: devMode ? '[name].js' : '[name].[hash].js'
    },
  },
  all_config(devMode, options)]);
}