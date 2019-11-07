// 单独导出
export const a = 1

// 批量导出
const b = 2
const c = 3
export { b, c }

// 导出接口
export interface P {
  x: number
  y: number
}

// 导出函数
export function fn () {}

// 导出时起别名
export { fn as Fn }

// 默认导出
export default () => { console.log('I am a function') }

// 引入外部模块，重新导出
export { str as Str } from './b'