const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function({ mode } = { mode: "development" }) {
  console.log(`mode: ${mode}`);

  const isDevelop = mode === "development";

  return {
    entry: {
      main: "./app/index.tsx"
    },
    mode: mode,
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
      minimize: !isDevelop,
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
        },
        {
          test: /\.css$/,
          loader: [
            isDevelop ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                localsConvention: "camelCase",
                sourceMap: isDevelop
              }
            }
          ]
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
      // this plugin injects the <script></script> and <link></link> tags
      // into your html file after making the resource bundles
      new HtmlWebpackPlugin({
        title: "Simple React App",
        template: "app/index.html"
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      })
    ]
  };
};
