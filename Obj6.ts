//Intersection Types .....
//Intersection  of multiple types so that we can intersect multiple types mentioned before to assign  the new type

type Circle = {
	radius: number;
	diameter: number;
};

type Colored = {
	color: string;
};
//now we will create a type Colored Circle having the properties of both the Colored type and Circle type .....
//use a '&'  symbol to create a intersected type...

type ColoredCircle = Colored & Circle;
let happyFace: ColoredCircle = {
	radius: 12,
	diameter: 24,
	color: "RED",
};

console.log("the Intereseced Type ...", happyFace);
