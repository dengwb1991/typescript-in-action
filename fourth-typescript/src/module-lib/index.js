const version = '1.0.0'

function doSomething () {
    console.log('module lib do something')
}

function moduleLib (options) {
  console.log(options)
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib