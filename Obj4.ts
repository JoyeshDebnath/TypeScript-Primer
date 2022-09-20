//Optional Property Of Object:Add a question Mark in Front of the prperty name to denote it as a optional  property ...
//Syntax :  Optional_property? : number|string|boolean

//create object with optional propery
type Player = {
	name: string;
	age: number;
	country: string;
	isStriker?: boolean;
	isPlayer?: boolean;
};
let P1: Player = {
	name: "Joyesh Debnath",
	age: 22,
	country: "India",
};

const P2: Player = {
	name: "Messi",
	age: 34,
	country: "Argentina",
	isPlayer: true,
};
