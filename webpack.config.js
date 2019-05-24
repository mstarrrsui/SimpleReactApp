const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  console.log(env);
  const isDevelop = env.mode === "development" ? true : false;
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
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true
          }
        }
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
    devServer: {
      contentBase: path.join(__dirname, "app"),
      compress: true,
      port: 8080
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        title: "Simple React App",
        template: "app/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      })
    ]
  };
};
