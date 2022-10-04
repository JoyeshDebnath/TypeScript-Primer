# TypeScript-Primer
This  is a reference Point for the Type Script Concepts (Fork it or star it )
![js-ts](https://user-images.githubusercontent.com/75598588/191269559-0ffed052-4717-4a1b-a340-74197ea56cce.png)


TypeScript files use a .ts extension, in contrast to the .js extension used by the JavaScript files. Since TypeScript is a superset of JavaScript, all valid JavaScript code is a valid TypeScript code, and renaming a .js file to .ts won’t change anything. Here is an example of a standard TypeScript program that adds two numbers and returns the result. Notice how the arguments and the return types are annotated with their type.

function add(a: number, b: number): number {
  const sum = a + b;
  return sum;
}
When you compile a TypeScript file using the tsc command, the Typescript compiler generates vanilla JavaScript that gets executed. For example, this is what the compiler will produce for the above snippet of code.

function add(a, b) {
  const sum = a + b;
  return sum;
}

TypeScript adds optional static typing and language features such as classes and modules. It’s important to know that all these advanced features add zero cost to JavaScript. A typeScript is purely a compile-time tool. Once you compile, you are left with plain, idiomatic JavaScript. TypeScript is a language for application scale JavaScript development.

Objects are dictionary-like collections of keys and values. The keys have to be unique. They are similar to arrays and are also sometimes called associative arrays. However, an array uses numbers to index the values, whereas an object allows you to use any other type as the key.

In TypeScript, an Object type refers to any value with properties. It can be defined by simply listing the properties and their types. For example,

let pt: { x: number; y: number } = {
  x: 10,
  y: 20
};
In programming, a null value indicates an absence of value. A null variable doesn’t point to any object. Hence you cannot access any properties on the variable or call a method on it.

In TypeScript, the null value is indicated by the ‘null’ keyword. You can check if a value is null as follows:

function greet(name: string | null) {
if (name === null) {
  console.log("Name is not provided");
} else {
  console.log("Good morning, " + name.toUpperCase());
}
}

var foo = null;
greet(foo); // "Name is not provided"

foo = "Anders";
greet(foo);  // "Good morning, ANDERS"
Enums allow us to create named constants. It is a simple way to give more friendly names to numeric constant values. An enum is defined by the keyword enum, followed by its name and the members.

Consider the following example that defines an enum Team with four values in it.

enum Team {
Alpha,
Beta,
Gamma,
Delta
}
let t: Team = Team.Delta;
By default, the enums start the numbering at 0. You can override the default numbering by explicitly assigning the values to its members.

TypeScript also lets you create enums with string values as follows:

enum Author {
  Anders = "Anders",
  Hejlsberg = "Hejlsberg"
};
