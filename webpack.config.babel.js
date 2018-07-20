import webpack from "webpack";
import path from "path";
import webpackMerge from "webpack-merge";

import handleSCSS from "./scripts/webpack/scss";
import handleES6 from "./scripts/webpack/es6";
import htmlInjector from "./scripts/webpack/html";

export default (env, argv) => {
  return webpackMerge({
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist/"),
    }
  },
    handleSCSS(),
    handleES6(),
    htmlInjector()
  );
};