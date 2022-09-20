//task create an array of Object Players where each player object will have the property
//of player-name , player-age, player-country and player nation

type Player = {
	Player_Name: string;
	Player_Age: number;
	Player_Country: string;
	Player_Club: string;
};

let Players: Array<Player> = [];
const P1 = {
	Player_Name: "Lionel Messi",
	Player_Age: 34,
	Player_Country: "Argentina",
	Player_Club: "Barcelona",
};

const P2 = {
	Player_Name: "Luis Suarez",
	Player_Age: 35,
	Player_Country: "Uruguay",
	Player_Club: "Barcelona",
};

Players.push(P2);
Players.push(P1);

console.log(Players);
