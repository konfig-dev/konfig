const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  output: {
    filename: "browser.js",
    path: path.resolve(__dirname, "dist"),
    library: "client",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      crypto: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
