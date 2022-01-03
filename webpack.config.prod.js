import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
// import * as HtmlWebpackPlugin from "html-webpack-plugin";
const HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    //Generate an external css file with a hash in the filename.
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
