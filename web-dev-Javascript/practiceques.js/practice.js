var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
var Result = str1 + " " + str2.trim() + " " + str3.trim();
console.log(Result);
console.log("Q1 END =====================");

//switch case
let enteredAlphabet = window.prompt("Enter input");
switch (enteredAlphabet) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("vovel");
        break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "y":
    case "z":
        console.log("alphabet");
        break;
    default:
        console.log("this is default use case");


}
console.log("Q2 END =====================");

//---calculator----
/*
const number1 = parseFloat(prompt("the number 1"));
const number2 = parseFloat(prompt(" the number 2"));
const operation = parseFloat(prompt("enter opertion to be performed from + - * /"));
switch (operation) {
    case '+':
        console.log(number1 + number2);
        break;
    case '-':
        console.log(number1 - number2);
        break;
    case '*':
        console.log(number1 * number2);
        break;
    case '/':
        console.log(number1 / number2);
        break;
    default:
        console.log("default");
}*/
//triangle
let a = parseFloat(prompt("enter side 1"));
let b = parseFloat(prompt("enter side 2"));
let c = parseFloat(prompt("enter side 3"));
if (a == b && a == c && c == a) {
    console.log("equivalent triangle");
} else if (a == b || b == c) {
    console.log("isosceles triangle");
} else {
    console.log("scalene triangle");
}
// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354
let total;
let temp;
const input = prompt(parseInt("Enter input value"));
if (input <= 50) {
    temp = input * 0.5;
} else if (input >= 50 && input <= 150) {
    temp = 50 * 0.5 + (input - 50) * 0.75;
} else if (input >= 150 && input <= 250) {
    temp = 50 * 0.5 + 100 * 0.75 + (input - 150) * 1.2;
} else {
    temp = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (input - 250) * 1.5;
}
total = (temp + (.20 * temp));
console.log(`INR ${total}`);
// console.log("Q5 END =====================")
// const input = prompt(parseInt("Enter input value"));
// if (input < = 50) {
//     console.log(input * 0.5);
// } else if (input > = 50 && input <= 150) {
//     console.log(input * 0.5 + input * 0.75);
// } else if (input > = 150 && input <= 250) {
//     console.log(input * 0.5 + input * 0.75 + input * 1.2);
// } else {
//     console.log(input * 0.5 + input * 0.75 + input * 1.2 + input * 1.5);
// }
// console
// console.log("string" ? true : false);
// var valA = "true";
// var valB = "false";
// var valC = "true";
// var valD = "false";
// console.log(!!valA == !!valB);
// console.log(!!valC == !!valD);

// var a = 10;
// var b = 5;
// var c = 12;
// var e = 8;
// var d;
// d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
// console.log(d);
// if (d == 1) {
//     console.log(parseInt((a * (c - b) / e + (b + c)));
//     }
//     else {
//         console.log(parseInt((e * (c + a) / (b + c) + a)));

//     }

//     //learning untaggedthese created string
//     `string text `
//     `string text line 1 `
//     `string text line 2 ` 
//    re usable templated string
//     const templatefn = expression => `string text $ { expression }string text `
//     console.log('string text line 1 string text line 2`);
//             //string interpolation