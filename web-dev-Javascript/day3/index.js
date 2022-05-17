// //learning postfix and preffix

// var myMarks = 45;
// var updatedMark = myMarks++ + 5;
// //== comapare value
// // = is an assignment operator 
// //===
// var x = 9;
// var y = 6;
// x = x + y;
// y = x - y;
// var myName = "11Nitin";

/* console.log(isNaN(NaN)); */

//operators
/* 
console.log(typeof myName);

console.log(678 + 987);
console.log(6978 - 987);
console.log(678 * 987);
console.log(100 / 4);
console.log(22 % 3); */

// operands and operators

//postfix and prefix operators

//a++, ++a
//a++ -> a=a+1
//a+b // a, b operands , + operator

//postfix
//var myMarks = 45; // 45+1
//var myUpdatedMarks = myMarks + 5; // expression //45 + 5
/* first evaluate the expression with the original value
the value of the variable is incremented
1) original value (45) + 5 -> 45+5 = 50 updated marks --> 50
2) myMarks= myMarks + 1  --> myMarks = 45 + 1 = 46
*/
//console.log(myMarks);
//console.log(myUpdatedMarks);

//prefix
//var myMarks = 45;
//var myUpdatedMarks = ++myMarks + 5; // expression .//
// first the value of the variable is incremented
/* then the expression is evaluated with the updated value */
/* 1) 45+1 =46   46+5 --> 51 updated myMarks
2) mymarks - 46 */
/* console.log(myMarks);
console.log(myUpdatedMarks); */

/* a++ ~ a=a+1 */
//var myMarks = 45;
//var myUpdatedMarks = myMarks-- + 5; // expression .// (45-1) + 5
//console.log(myMarks);
//console.log(myUpdatedMarks);

// assignment operator
//assigning the value to the left operand
//var myScore = 100; // number
//var myScore1 = "100"; //string

//console.log(typeof myScore);
//console.log(typeof myScore1);

// == vs ===
//console.log(myScore == myScore1); // checks only value
//console.log(myScore === myScore1); // not only checks the value but also checks the datatype

//comparison
/* var myScore = 100; // number
var myNewScore = 150; //string

console.log(myScore == myNewScore);
console.log(myScore != myNewScore);
console.log(myScore >= myNewScore);
console.log(myScore <= myNewScore);
 */
//logical operators

/* var A = 11;
var B = 22;

console.log(A < B && B > 0); */

/* A < B - 1; // true
B > 0 - 1; // true */
/* var A = 11;
var B = -22; */

/* && -  AND operator
|| - OR operator */

/* console.log(A < B && B > 0);
A < B - true;
B > 0 - false; */

/* console.log(!(A < B) || B > 0);
A < B - false;
B > 0 - false;
//string operator
var myName = "Gargi";
var myMark = 5;
var myNewMark = "2";
var mySurName = "Chakraborty";

console.log(myName + mySurName);
console.log(myName - mySurName);

console.log(myName + myMark);
console.log(myName + myMark);
console.log(myMark - myNewMark); 

console.log(true + true); // 1+1
console.log(myMark - myName); // 1+1


 */

// //WAP to swap two variables
// var x = 9;
// var y = 6;

//x=6, y=9

//intoduced one 3rd variable
//var z = y; // z=6 // whatever value is there inside y , assign that value to z , = is a assignment operator
//y = x; //y=9
//x = z; // x=6

// x = x + y; //x=15
// y = x - y; //15-6 = 9  y=9
// x = x - y; //15-9 = 6

// console.log(x);
// console.log(y);
// var myName = "Tom";
// // var
// console.log(myName, typeof myName);
// var phoneNo = string(5425235325); //explicit type conversion
// console.log(phoneNo, typeof phoneNo);
// var myDetails;
// console.log(myDetails, typeof myDetails);
var x; //undefined
x = 11;
console.log(x, typeof x);
x = x + "";

console.log(x, typeof x);
x = x - 5;


// console.log(x, typeof x);
// point tobe remember that is n+ s= string 
// it is coersion property

// n+s=s && n-s=n
var a = " ";
console.log(Boolean(a));
//truthy = 1& falsey// 0"" undefined NaN null are are falsly value.
var mynewName = "11Khushi";

console.log(Boolean(mynewName));