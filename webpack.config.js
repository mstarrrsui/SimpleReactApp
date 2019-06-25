const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode } = { mode: "development" }) => {
  console.log(`mode: ${mode}`);

  const isDevelop = mode === "development";

  return {
    mode: mode,
    devtool: isDevelop ? "inline-source-map" : "",
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
          use: [
            isDevelop ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|otf|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    },
    //
    // configure the dev server
    //
    devServer: {
      historyApiFallback: true,
      //contentBase: path.join(__dirname, "app"),
      open: "Chrome",
      hot: false,
      quiet: false,
      noInfo: false,
      stats: {
        // Config for minimal console.log mess.
        assets: true,
        colors: true,
        version: true,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: false
      }
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
