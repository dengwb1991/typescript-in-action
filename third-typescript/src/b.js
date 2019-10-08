/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1)); // 3.141592653589793
console.log(Shape.square(1)); // 1
// 别名
var cricle = Shape.cricle;
console.log(cricle(2));
