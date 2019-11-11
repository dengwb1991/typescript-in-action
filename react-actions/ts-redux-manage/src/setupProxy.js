const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:4001',
    pathRewrite(path) {

      return path.indexOf('?') > -1 ? path.slice(0, path.indexOf('?')).replace('/api', '').concat('.json') : path.replace('/api', '').concat('.json')
    }
  }))
}