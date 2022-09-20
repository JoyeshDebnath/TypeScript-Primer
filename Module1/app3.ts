// /declaration of the function structure
var greeting: (name: string) => string;

greeting = function (name: string) {
	return `Hello my name is ${name}`;
};

console.log(greeting("Joyesh"));
