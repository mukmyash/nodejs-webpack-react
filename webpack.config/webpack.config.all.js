const merge = require('webpack-merge');

const style_config = require('./webpack.config.style');
const typescript_config = require('./webpack.config.typescript');
const vendor_config = require('./webpack.config.vendor');
const server_config = require('./webpack.config.server');
const html_config = require('./webpack.config.html');
const clean_config = require('./webpack.config.clean');

module.exports = function (devMode, options) {
    return merge([
        clean_config(devMode, options),
        style_config(devMode, options),
        typescript_config(devMode, options),
        vendor_config(devMode, options),
        server_config(devMode, options),
        html_config(devMode, options),
    ]);
}