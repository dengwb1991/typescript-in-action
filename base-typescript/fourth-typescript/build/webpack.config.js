const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

module.exports = (env, argv) => {
  // process.env.NODE_ENV
  const config = argv.mode === 'development' ? devConfig : prodConfig
  return merge(baseConfig, config)
}

