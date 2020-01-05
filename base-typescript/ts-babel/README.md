# babel 编译 ts

## 使用

安装包

```
  "@babel/cli": "^7.4.4",
  "@babel/core": "^7.4.5",
  "@babel/plugin-proposal-class-properties": "^7.4.4",
  "@babel/plugin-proposal-object-rest-spread": "^7.4.4",
  "@babel/preset-env": "^7.4.5",
  "@babel/preset-typescript": "^7.3.3"
```

`plugin-proposal-class-properties` 支持 class、`plugin-proposal-object-rest-spread` 支持对象解构赋值


.babelrc

```
{
  "presets": [
    "@babel/env",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
```

## 4种书写方式 Babel 无法编译

1. 命名空间

```ts
namespace N {
  export const n = 1
}
```

2. 类型断言只允许使用 `as`

```ts
let s = <A>{}
```

3. 常量枚举

```ts
const enum E { A }
```

4. 默认导出

```ts
export = s
```