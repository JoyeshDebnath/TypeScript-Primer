// normal array with union type to hold both string and number
let Arr: (string | number)[] = [];
Arr.push("Hello");
Arr.push(200);
Arr.push("Welcome");
Arr.push(2000);
console.log(Arr);

let Arr2: Array<string | number> = [];
Arr2.push("Hello2");
Arr2.push(200);
Arr2.push("Welcome2");

console.log(Arr2);

//Now Use Tuples

let MyTuples: [number, number, string, string];

MyTuples = [2000, 5000, "Joyesh", "Debnath"];
console.log(
	"This is a tuple where the number of elements and the type ordering is strict .... "
);
console.log(MyTuples);
