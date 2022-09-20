//ENUM in typescript ....

enum Month {
	JAN,
	FEB,
	MAR,
	APR,
	MAY,
	JUN,
	JUL,
	AUG,
	SEP,
	OCT,
	NOV,
	DEC,
} //ENUM MONTH

function isItSummer(month: Month) {
	var isSummer: boolean;

	switch (month) {
		case Month.JUN:
		case Month.JUL:
		case Month.AUG:
			isSummer = true;
			break;
		default:
			isSummer = false;
			break;
	}
	return isSummer;
}

console.log(isItSummer(Month.AUG));
