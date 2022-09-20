//1st way of representing the arrays ...
let Players: string[] = [
	"Lionel Messi",
	"Cristiano Ronaldo",
	"Luis Suarez",
	"Zlathan Ibrahimovich",
];
let Fibo: number[] = [1, 1, 2, 3, 5, 8, 13, 21];

//2nd way of representing the arrays ..
let Names: Array<string> = ["Sheela", "Johny", "Dilip"];
let num: Array<number> = [101, 202, 303, 404];

let countries: Array<string> = [];
countries.push("India");
countries.push("Russia");
countries.push("United States");
countries.push("Canada");

countries.map((country) => {
	console.log("This is ", country);
});
