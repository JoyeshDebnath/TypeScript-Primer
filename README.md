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

