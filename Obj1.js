//create a function and take a object as parameter
function printPerson(person) {
    console.log("Hello Mr. ".concat(person.first, " ").concat(person.last));
}
printPerson({ first: "Joyesh", last: "Debnath" });
printPerson({ first: "Lionel", last: "Messi" });
