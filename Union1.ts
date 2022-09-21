//exampple of use of  literal type with union type ..

const giveAnswer = (ans: "YES" | "NO" | "MAYBE"): string => {
	return `The Answer is ${ans}`;
};

console.log(giveAnswer("YES"));
