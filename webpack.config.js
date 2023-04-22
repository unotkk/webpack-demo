// import HtmlWebpackPlugin from "html-webpack-plugin";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
// import path from "path";

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader",
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
