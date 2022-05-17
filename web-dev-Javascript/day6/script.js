// Arrays
// Array Methods
// Statements and expressions
// Practice


myName = "khushi";
console.log(`my name is ${myName}`);



//expression can producevalues.......
//statements can't produce any value...

// array declarations 
const myMarks = new Array(98, 89, 78, 90);
console.log(myMarks);

//array

const friend1 = "Somnath";
const friend2 = "nilesh";
const friend3 = "shubham";
const friend4 = "avi";
const friend5 = "surya";
const friend6 = "Deepak";
const friend7 = "logu";
const friend8 = "Saurabh";
const friend9 = "mukul";
const friend10 = "rushikesh";
const myFriends = ["som", "nil", "shubh", "khushi"];
console.log(friend1, friend2, friend3, friend4, friend5, friend6);
console.log(`
        my array is $ { myFriends }
        `);
console.log(myFriends.length);
console.log(myFriends.length - 1); //point to last elements of an array
console.log(myFriends[myFriends.length - 1]);
//note array are not primitive data type so we can change /mutate their value
myFriends[6] = "pramod";
myFriends[8] = "kabba";
console.log(myFriends);


//
const cars = ['ford', 'bmw', 'kia', 'hummer'];
console.log(cars);
cars.push('toyata');
console.log(cars);
// const newCar = cars.push("nano"); // returns the length of the array of car
// console.log(newCar);
console.log(cars);
// using unsift method 
cars.unshift("tesla"); // to adda element at begining array
console.log(cars);
console.log(cars.pop());
cars.shift(); // delete element
console.log(cars); //shift will only delete first element
cars.push("car1 ");
cars.push("car 2");

cars.push("car 3");
cars.push("car 4");

cars.push("car 6");
cars.push("car 7");
cars.push("car 8");
cars.push("car 9");
cars.push("car 10");

console.log(cars);
cars.splice(4, 4); // means from 4 index i have deleted 4 values
console.log(cars);
console.log(cars.includes("ford")); // include check wheather an element is present or not
check = cars.includes("bmw"); // global scope og check
console.log(check);
const phones = ['redmi', 'mi', 'vivo', '1shot', 'oppo'];
console.log(phones);