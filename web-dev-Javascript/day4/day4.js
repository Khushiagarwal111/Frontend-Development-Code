//day4 switch ternary template literal
//coercion

var x = 11; //undefined
x = 11; //number
console.log(x, typeof x);
x = x + "gargi"; //string coercion
console.log(x, typeof x);
console.log(parseInt(x));
x = x - 5; //x--> string  y--> number-->
//x=11 y=5
console.log(x, typeof x);
console.log(parseInt(x));
//let and const are introduced in Es6
//let can be change at time of executionor reassigning the valueor mutate a variable
let noMarks = 40;
noMarks = 60;
//const can't reassign valus to a variable because
// its immutable variable 
const totalMarks = 100;
// totalMarks = 80; using error if we try to update

//let and const habe block scope

var myName1 = "khushi";
//var has function scope

//good practice to use const,as minimum variable mutation
const myName = "Khushi Agarwal";

const YOB = 1500;
const cYear = 1550;
const text = "I'm " + myName + " a developer who's " + (cYear - YOB) + " year old";
console.log(text);

const text1 = `I'm ${myName} a developer who's ${cYear-YOB} year old`; //template literall
console.log(text1);
const text3 = `simple string`;
const multipleLines = ` i want \n\ to console \n\ multiple lines`;
console.log(multipleLines);
console.log('heyyy \n\
        i am khushi agarwal ');
//if else
// falsy values= 0 null undefined nan
let text5 = "raining";
if (text5.includes("rain")) { // if the condition is true it will executed
    console.log(" I will not go to school");
} else {
    console.log(" will go to school");
}

//switch case
const day = "Sunday";
switch (day) {
    case 'monday':
        console.log("basic js");

    case 'tuesday':
        console.log("operator in js");
    case 'wednesday':
        console.log("string methods");
    case 'thrusday':
        console.log("switch case");
    case 'friday':
    case 'sat':
        console.log("practice");
    default:
        console.log("off for this week");

}
if (day == "monday") {
    console.log("basic js");
} else {
    console.log("completing assignment........................");
}

//ternary operator.... 
const minemarks = 100;
const selfevaluation = minemarks >= 90 ? "excellent" : "work harder";
console.log(selfevaluation);
console.log(text.charAt(6)); //character at 6th postion
console.log(text.concat(text1));
console.log(text.ends("f"));