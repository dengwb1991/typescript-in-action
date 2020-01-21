const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index.ts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}