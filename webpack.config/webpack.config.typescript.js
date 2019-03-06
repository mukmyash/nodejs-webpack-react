const tsNameof = require("ts-nameof");

module.exports = function (devMode, options) {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: "awesome-typescript-loader",
            options: {
              getCustomTransformers: () => ({ before: [tsNameof] })
            }
          }]
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  };
};