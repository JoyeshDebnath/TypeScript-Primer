//annotate the object return type for a function
//below is the function which will return  a object so lets annotate the function .....
function getRandomCoordinate(): { X: number; Y: number } {
	return {
		X: Math.random(),
		Y: Math.random(),
	};
}

function doSomething(Coordinate: { X: number; Y: number }): void {
	let X_dash = Coordinate.X * 10000;
	let Y_dash = Coordinate.Y * 10000;
	console.log(X_dash);
	console.log(Y_dash);
}

let Val = getRandomCoordinate();
console.log(Val);
doSomething(Val);
