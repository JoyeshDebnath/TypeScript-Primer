//readOnly feature
//readonly can be used with any variable of property
//name to mark it read only ie it can be only be read cannot be modified or changed ...

type Coordinate = {
	readonly ID: string;
	X: number;
	Y: number;
	Z?: number;
};

var Coordinate_One: Coordinate = {
	ID: "123456",
	X: Math.random(),
	Y: Math.random(),
};

var Coordinate_Two: Coordinate = {
	ID: "234567890",
	X: Math.random(),
	Y: Math.random(),
	Z: Math.random(),
};

// the below will give us wrong as read only property it is
// Coordinate_Two.ID = "12334444";
