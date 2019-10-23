const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

let config = process.NODE_ENV === 'development' ? devConfig : prodConfig

module.exports = merge(baseConfig, config)
