var Shape;
(function (Shape) {
    var pi = Math.PI;
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
