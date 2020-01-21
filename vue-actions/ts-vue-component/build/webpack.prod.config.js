const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}