//create an enum of sring and then print them
var Directions;
(function (Directions) {
    Directions["NORTH"] = "north";
    Directions["SOUTH"] = "south";
    Directions["EAST"] = "east";
    Directions["WEST"] = "west";
})(Directions || (Directions = {}));
console.log(Directions.NORTH);
console.log(Directions.SOUTH);
console.log(Directions.EAST);
console.log(Directions.WEST);
var Mixed;
(function (Mixed) {
    Mixed["UP"] = "up";
    Mixed["DOWN"] = "down";
    Mixed[Mixed["lat"] = 34.33] = "lat";
    Mixed[Mixed["lon"] = 90.87] = "lon";
})(Mixed || (Mixed = {}));
console.log("Coordinate is ", Mixed.lat + "  , " + Mixed.lon + " , " + Mixed.lat);
