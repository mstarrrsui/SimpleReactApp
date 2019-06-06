const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./app/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: ""
  },
  //
  // these are the default extensions for imports
  //
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  //
  // this controls minification and code splitting.  this is set up for default behavior
  // https://webpack.js.org/plugins/split-chunks-plugin/
  //
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all"
    }
  },
  //
  // configure the loaders
  //
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  //
  // configure the dev server
  //
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "app"),
    open: "Chrome"
  },
  //
  // configure the plugins
  //
  plugins: [
    new HtmlWebpackPlugin({
      title: "Simple React App",
      template: "app/index.html"
    })
  ]
};
