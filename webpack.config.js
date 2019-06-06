const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode } = { mode: "development" }) => {
  console.log(`mode: ${mode}`);

  const isDevelop = mode === "development";

  return {
    mode: mode,
    entry: {
      main: "./app/index.tsx"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js"
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
    //
    // configure the dev server
    //
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "app"),
      open: "Chrome",
      hot: true
    },
    //
    // configure the plugins
    //
    plugins: [
      // this plugin extracts the CSS into an actual file instead of inlining it
      // into the JS
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      }),
      // this plugin injects the <script></script> and <link></link> tags
      // into your html file after making the resource bundles
      new HtmlWebpackPlugin({
        title: "Simple React App",
        template: "app/index.html"
      })
    ]
  };
};
