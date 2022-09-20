//create a function and take a object as parameter

function printPerson(person: { first: string; last: string }) {
	console.log(`Hello Mr. ${person.first} ${person.last}`);
}
printPerson({ first: "Joyesh", last: "Debnath" });
printPerson({ first: "Lionel", last: "Messi" });
