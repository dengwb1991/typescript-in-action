/// <reference path="a.ts" />

namespace Shape {
  export function square (x: number) {
    return x * x
  }
}

console.log(Shape.cricle(1)) // 3.141592653589793
console.log(Shape.square(1)) // 1

// 别名
import cricle = Shape.cricle
console.log(cricle(2)) // 12.566370614359172