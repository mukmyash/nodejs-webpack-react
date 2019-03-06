
const webpack = require('webpack');
const fs = require('fs');
const url = require('url')
module.exports = function (devMode, options) {
  if (!devMode)
    return {};

  return {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: options.outputPath,
      compress: false,
      hot: true,
      open: true,
      port: 9000,
      before: function (app, server) {

        const findResponse = (req, res) => {
          var settings = JSON.parse(fs.readFileSync(`./webpack.config/dev-server-response-api/_settings.json`, 'utf8'));

          var myUrl = url.parse(req.url);
          var responseInfo = settings.Responses.find(item => (item.MethodeType == req.method && item.urlPath == myUrl.pathname))

          if (!responseInfo) {
            res.status(500).send({ ERROR: 'не найден' });
            return
          }

          if (!responseInfo.Data) {
            res.status(200).send();
            return
          }
          console.log(JSON.stringify(responseInfo))
          var responseData = JSON.parse(fs.readFileSync(`./webpack.config/dev-server-response-api/${responseInfo.Data}`, 'utf8'));
          res.json(responseData);
        }

        app.get("/api/*", findResponse);
        app.post("/api/*", findResponse);
        app.put("/api/*", findResponse);
        app.delete("/api/*", findResponse);
      }
    }
  };
};