//create an enum of sring and then print them
enum Directions {
	NORTH = "north",
	SOUTH = "south",
	EAST = "east",
	WEST = "west",
}
console.log(Directions.NORTH);
console.log(Directions.SOUTH);
console.log(Directions.EAST);
console.log(Directions.WEST);

enum Mixed {
	UP = "up",
	DOWN = "down",
	lat = 34.33,
	lon = 90.87,
}

console.log(
	"Coordinate is ",
	Mixed.lat + "  , " + Mixed.lon + " , " + Mixed.lat
);
