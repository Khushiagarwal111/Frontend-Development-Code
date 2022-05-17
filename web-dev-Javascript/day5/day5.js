//
const name = window.prompt(" enter a number value");
console.log(`welcome ${name}`);
if (num > 0)
    console.log("the number is positive");
else if (num < 0)
    console.log("the number is negative");
else if (num === 0)
    console.log(" the number is zero");
let n = parseInt(prompt("Enter the number"));
if (n > 0) {
    console.log("positive");
} else if (n < 0) {
    console.log("negative");
} else {
    console.log("zero");
}
//switch..wap to check wheather a number is even or odd
switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
    case "wednesday":
    case "thrusday":
    case "friday":
        console.log("3 days");
    case "saturday":
        console.log("saturdayyyyyyyy");

}

// even or odd
let num = parseInt(prompt("enter number to be checked "));
if (num % 2 === 0) { // using strict equality to check
    console.log("even");

} else {
    console.log("odd");
}
//WAPto find the largest number among three number 

let number1 = parseInt(prompt("Enter First number"));
let number2 = parseInt(prompt("Enter second number"));
let number3 = parseInt(prompt("Enter thrid number"));
//here we are comparing number1 to other two  number
if (num1 >= num2 && num1 >= num3) {
    console.log("number 1 is greatest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("number 2 is greatest");
} else {
    console.log("number 3 is greatest");
}
// math function
//triangle
const base = parseInt(prompt("enter a number"));
const height = parseInt(prompt(" enter height"));
const area = (base * height) / 2;
console.log(area);
//equilateral triangle 
const s1 = parseInt(prompt("enter 1st side"));

const s2 = parseInt(prompt("enter 2nd side"));

const s3 = parseInt(prompt("enter 3st side"));
const s = (s1 + s2 + s3) / 3;
//convert f to c
//c=f-32/9
//f=()
// const c = prompt(" Enter a censius temperature");
// const f = c * 1.8 * 32;
const f = prompt(" enter f value");
const c = (f - 32) * 5 / 9;
console.log(c);

//use of trim() function
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
Result = str1 + str2.trim() + str3.trim();
console.log(Result);