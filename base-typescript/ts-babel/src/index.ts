class A {
  a: number = 1
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
let n = { x, y, ...z }

// namespace N {
//     export const n = 1
// }

// let s = <A>{}
// s.a = 1

// const enum E { A }

// export = s