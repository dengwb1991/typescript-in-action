import $ from 'jquery'

globalLib({ a: 1 })

import module from './module-lib/index.js'

module({a: 2 })

import umd from './umd-lib/index.js'

umd.doSomething()