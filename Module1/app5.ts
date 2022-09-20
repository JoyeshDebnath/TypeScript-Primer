//lecture 5::   Playing with  objects

var Person: {
	firstName: string;
	lastName: string;
	age: number;
	address: {
		city: string;
		state: string;
		houseNO: number;
	};
};

Person = {
	firstName: "Joyesh",
	lastName: "Debnath",
	age: 22,
	address: {
		city: "Kolkata",
		state: "West Brngal",
		houseNO: 1123,
	},
};

console.log(Person.firstName + " " + Person.lastName);

console.log(Person.address);
