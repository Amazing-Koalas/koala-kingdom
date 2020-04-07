const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: isProd ? "production" : "development",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "app.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: "Koala Kingdom Client",
      excludeWarnings: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    // Pixi will manage game asset loading, so we just need to copy them.
    // Webpack will not be involved in bundling.
    new CopyPlugin([{ from: "src/assets", to: "assets" }]),
  ],
};
