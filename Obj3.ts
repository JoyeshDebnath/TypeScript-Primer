//Type Alias
//create a Alias of Object of Players and create  a array of Player object and then print them
type Pl = {
	name: string;
	age: number;
	club: string;
	country: string;
};

let Players: Array<Pl> = [];
Players.push({
	name: "Lionel Messi",
	age: 34,
	club: "Barcelona",
	country: "Argentina",
});

Players.push({
	name: "Gerald Pique",
	age: 36,
	club: "Barcelona",
	country: "Spain",
});

Players.push({
	name: "Andreas Iniesta",
	age: 39,
	club: "Barcelona",
	country: "Spain",
});

Players.push({
	name: "Neymer",
	age: 32,
	club: "Barcelona",
	country: "Brazil",
});

Players.map((Player) => {
	console.log("Player Name=", Player.name);
	console.log("Player Age=", Player.age);
	console.log("Player Country=", Player.country);
	console.log("Player Club=", Player.club);
	console.log("\n\n");
});
