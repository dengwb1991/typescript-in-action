/**
 * 这里需要注意，引入文件时未添加文件名后缀（.ts），当用 node 命令执行时，默认会找 js 文件，这里有以下解决方案
 * 1、编译成 js 后执行
 * 2、添加 .ts 后缀
 * 3、安装 ts-node，npm i ts-node -g，ts-node xxxx
 */ 
let c1 = require('./a.node')
let c2 = require('./b.node')

console.log(c1) // { x: 1, y: 2 }
console.log(c2) // { c: 3, d: 4 }


/**
 * 当 CommondJS 引入 es6 输出时，调用默认导出时需要调用 `default` 属性
 */
let es6 = require('../es6/a')

es6.default() // I am a function

/**
 * 若使用 `export =` 形式导出时，相当于 CommonJS 的顶级导出 `module.exports =` 
 */
let d = require('../es6/d')

d() // I am a function