const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode } = { mode: "development" }) => {
  console.log(`mode: ${mode}`);

  const isDevelop = mode === "development";

  return {
    entry: {
      main: "./app/index.tsx"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      publicPath: ""
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            isDevelop ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      }),
      new HtmlWebpackPlugin({
        title: "Simple React App",
        template: "app/index.html"
      })
    ]
  };
};
