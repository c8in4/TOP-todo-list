const { merge } = require('webpack-merge')
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ['./src/*.html']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
})