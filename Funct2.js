// /return type of the function in ts
var isEven = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(202));
function RandFun(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num * 2;
    }
}
console.log(RandFun(12));
