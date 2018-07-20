import path from "path";
import webpackMerge from "webpack-merge";

import handleSCSS from "./scripts/webpack/scss";
import handleES6 from "./scripts/webpack/es6";
import htmlInjector from "./scripts/webpack/html";
import devServer from "./scripts/webpack/dev-server";

export default (env, argv) => {
  return webpackMerge({
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist/"),
    }
  },
    devServer(),
    handleSCSS(),
    handleES6(),
    htmlInjector()
  );
};