//Function annotations ..
function getMessage(message) {
    return message;
}
var returnedMessage = getMessage("Welcome to the World of typescript!!");
console.log(returnedMessage);
//with arrow function  ...
var greetGuest = function (guestName, lang) {
    return "Hello Mr. ".concat(guestName, " Welcome to the World of ").concat(lang, "...");
};
console.log(greetGuest("Joyesh Debnath", "TypeScript"));
//default parameter...
var greetProgrammer = function (CoderName, codeLang) {
    if (CoderName === void 0) { CoderName = "John Doe"; }
    if (codeLang === void 0) { codeLang = "Javascript"; }
    return "Hi Coder ".concat(CoderName, " , Lets code ").concat(codeLang, " today ...");
};
console.log("Lets see Default parameter in TS...");
console.log(greetProgrammer());
