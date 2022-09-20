//Playing with Array..
var skills;
skills = ["Javascript", "Node Js", "TypeScript"];
skills.push("JAVA");
console.log("My Professional Skills  \n");
console.log(skills);
// skills.push(12);
var series;
series = [1, 1, 2, 3, 5];
console.log(typeof series);
console.log(typeof series[2], series[1]);
console.log(series.length);
var doubleSeries = series.map(function (a) { return a * 2; });
console.log(doubleSeries);
