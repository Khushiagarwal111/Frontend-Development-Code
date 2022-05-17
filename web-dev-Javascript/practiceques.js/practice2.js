console.log(parseInt(true));
console.log(Number(true));

console.log(Number("123axy"));
console.log(parseFloat(10));
let x = 10;
console.log(parseFloat(x));
var num1 = 123.4567;
// console.log
var num1 = 123.4567;
console.log(num1.toFixed());
let mStr = " hello World  ";
mStr.trim();
console.log(mStr);
var mstr = "Mo Tu We Th fr sa su";
console.log(mStr.slice(6, 10));

console.log(undefined == null);
console.log(undefined === null);
console.log(!!"false" == !!"true");
var num1 = 123.4567;
console.log(typeof num1.toFixed(2));
console.log(parseFloat(10));
var day = "FR";
switch (day) {
    case "Mo":
        console.log("Monday");
    case "Tu":
        console.log("Tuesday");
    case "We":
        console.log("Wednesday");
    case "Th":
        console.log("Thursday");
    case "Fr":
        console.log("Friday");
    case "Sa":
        console.log("Saturday");
    case "Su":
        console.log("Sunday");
}