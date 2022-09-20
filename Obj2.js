//annotate the object return type for a function
//below is the function which will return  a object so lets annotate the function .....
function getRandomCoordinate() {
    return {
        X: Math.random(),
        Y: Math.random()
    };
}
function doSomething(Coordinate) {
    var X_dash = Coordinate.X * 10000;
    var Y_dash = Coordinate.Y * 10000;
    console.log(X_dash);
    console.log(Y_dash);
}
var Val = getRandomCoordinate();
console.log(Val);
doSomething(Val);
