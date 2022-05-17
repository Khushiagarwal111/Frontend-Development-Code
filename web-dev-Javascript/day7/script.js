const phones = ['redmi', 'mi', 'vivo', '1shot', 'oppo'];
console.log(phones);
phones.push("realme");
console.log(phones);
phones.unshift("samgung");
console.log(phones);
phones.unshift();
console.log(phones);

phones.includes("realme");
console.log(phones);

phones.pop("realme");
console.log(phones);

//ques5
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
//
const unit = prompt("Input Electricity unit");
let totalUnit;
if (unit <= 50) {
    totalUnit = unit * .5;
} else if (unit <= 150) {
    totalUnit = (50 * 0.5 + (unit - 50) * .75);
} else if (unit <= 250) {
    totalUnit = (50 * 0.5 + 100 * .75) + (unit - 150) * 1.2);

} else if (unit > 250) {
    totalUnit = (50 * 0.5 + 100 * .75 + 100 * 1.2 + (unit - 250) * 1.5);
} else {
    totalUnit = totalUnit + totalUnit * .20;

}
console.log(totalUnit);

let string2 = "My name is khushi Agarwal";
let string2 = "name";



if (string1.includes(string2)) {
    console.log(string1);
}
const text = prompt("Enter ur name");
const str = prompt("Enter he substring that u wanna know");
if (text.includes(str)) {
    console.log(`yes! ${str} is present ${text} in the given string`);
} else {
    console.log(`its not there!`);
}
// let a = 234;
// let b = "764 ";
// let c = 984;
const a = prompt("enter no1");
const b = prompt("enter no2");
const c = prompt("enter no3");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
let n = a % 10;

let m = b % 10;
let o = c % 10;
console.log(typeof b);
// console.log(typeof m);
if (n === m && m === o) {
    console.log("YES");
} else {
    console.log("NO");
}