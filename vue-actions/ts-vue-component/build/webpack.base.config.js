const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}