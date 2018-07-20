export default () => ({
  entry: [
    "./src/index.jsx"
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      use: {
        loader: 'babel-loader'
      }
    }]
  }
});