const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  devtool:"source-map",


  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: "output",
    filename: "index.js",
    path: path.resolve(__dirname, "output"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
