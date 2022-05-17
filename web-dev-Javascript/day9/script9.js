const cars = ['maruti', 'tesla', 'kia'];
const mobile = ["realme", "9 pro plus", "16px", "50px", 25000, "8gb", ["green", "black", "red "]];
console.log(mobile[5]);
/* 
company --> realme 
modelname --> 9 pro plus 
frontcamera--> 16px
backcmaera--> 50px;cost--> 25000
ram 8gb
color variation-->['','','']



*/
//14/5/2022
//you can create a const object 

const carCar = { type: "flat", model: "500 tata 10x", color: "white" };
//you can change a property
console.log(carCar);
//but can't reassign a value to it

carCar.color = "red";
//you can sadd a property with
carCar.owner = "Johnson";
console.log(carCar);
//object
// big difference obj and array is ..object are unstructed and array are structured
const mobileObj = {
    company: 'realme ',
    modelname: '9 pro plus',
    frontcamera: '16px',
    Camera: '50px',
    cost: 250000,
    ram: '8gb',
    colorvariant: ['green', 'blue', 'red']
};
console.log('my mobile details');
console.log(mobileObj);
console.log(cars);
console.log(mobile);
const bmw = ['price', 'modelname', 'modelno'];
console.log(bmw);

console.log(bmw);


// dot notation & brackets notation
console.log(mobileObj.frontcamera);
console.log(mobileObj.modelname);

//bracket notation'
console.log(mobileObj["frontcamera"]);
console.log(mobileObj["modelname"]);
console.log(mobileObj["modelno"]);
const val = "front";
console.log(mobileObj[val + "Camera"]); // can we putexpressioninside brackets

console.log(mobileObj.val + "Camera");
// const specs = prompt("Enter value of specs");
const specs = 'cost';

if (mobileObj[specs]) {
    console.log(mobileObj[specs]);

} else {
    console.log(mobileObj["Enter correct value"]);

}
mobileObj.displaySize = '6 inch ';
mobileObj["display"] = '8 inch';

// console.log(displaySize);



//operatorsin json
let x = 6;
let w = 12;
let z = x * w;
let v = 4;
console.log('value of x %d', x);
console.log('value of w %d', w);
console.log('value of z %d', z)
console.log('value of v %d', v);
v = v % x;
console.log('value of v %d', v);
v = v ** x;
console.log('value of v %d', v);
console.log(4 * 24 * 24);

//jsholds different type:numbers string object
let length = 16;
let lastName = "JohnSon";
let x2 = {
    firstName: "John ",
    lastName: "Doe"
};
console.log(x2);
//functionfunction myFun

function c2f(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
console.log(`my function calling experiment ${c2f(77)}`);

function myfn() {
    alert("Hello world!");
}

// we can access object by bracket notation or dot notation
//point to b notes- with bracket notatiom we need double quotations
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = person;
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);
const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
const person = {
    name: "John",
    today: new Date()
};
//Stringify Dates
//JSON.stringify converts dates into strings:

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
// Stringify Arrays
// It is also possible to stringify JavaScript arrays:
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;
//JavaScript Function or Getter ?
//What is the differences between these two examples ?
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object using a method:
document.getElementById("demo").innerHTML = person.fullName();
//const element = document.getElementById("intro");
const myObj = {
    name: "John",
    age: 30,
    cars: [{
        name: "bmw",
        modelno: "new pro max",
        serial_no:
    }]
}