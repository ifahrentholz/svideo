import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "../index.html"
    })
  ]
});