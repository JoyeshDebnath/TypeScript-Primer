//Function annotations ..
function getMessage(message: string) {
	return message;
}

let returnedMessage: string = getMessage(
	`Welcome to the World of typescript!!`
);
console.log(returnedMessage);

//with arrow function  ...
const greetGuest = (guestName: string, lang: string) => {
	return `Hello Mr. ${guestName} Welcome to the World of ${lang}...`;
};

console.log(greetGuest("Joyesh Debnath", "TypeScript"));

//default parameter...

const greetProgrammer = (
	CoderName: string = "John Doe",
	codeLang: string = "Javascript"
) => {
	return `Hi Coder ${CoderName} , Lets code ${codeLang} today ...`;
};

console.log("Lets see Default parameter in TS...");
console.log(greetProgrammer());
