import { a, b, c } from './a' // 批量导入
import { P } from './a' // 接口导入
import { fn as F } from './a' // 导入时设置别名
import * as All from './a' // 导入所有成员
import defaultFuntion from './a' // 导入默认

console.log(a, b, c) // 1 2 3

let p: P = {
  x: 1,
  y: 2
}

F()

/**
 * {
 *    __esModule: true,
 *    a: 1,
 *    b: 2,
 *    c: 3,
 *    fn: [Function: fn],
 *    Fn: [Function: fn],
 *    default: [Function],
 *    Str: 'b'
 * }
*/
console.log(All)

defaultFuntion() // I am a function