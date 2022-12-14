const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    liveReload: true,
    open: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader","sass-loader"] },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack app",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
