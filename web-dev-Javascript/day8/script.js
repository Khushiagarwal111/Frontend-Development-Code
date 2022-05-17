/*   todays agenda--------------------Function
Function Declaration
Function Expression
Arrow Function*/
// //works on DRY-DO NOT REPEAT YOURSELF


// function NamePrinting() {
//     console.log("My name is khushi");
//     console.log("My name is x");
//     console.log("My name is y");

// }
// NamePrinting();
// NamePrinting();
// NamePrinting();

// //function a piece of code that we can reuse
// function myFriend() {
//     console.log(`i am good at drawinggg`);


// }
// myFriend();

// function myStudents(girls, boys) {

//     //line of codes
//     const students = `I have ${girls} females students and ${boys} male students`;
//     console.log(`my function here`);
//     //return me the text 
//     return students;
// }
// const ms = myStudents(30, 80);
// console.log(ms);

// //function declarationf

// function myskill(skill) {
//     console.log(`i have ${skill} skill `);
//     const newskill = skill + " my new skill";
//     return newskill;
// }
// myskill("sketching");
// const ns = myskill('mern');
// console.log(ns);


// function calculateAge(birthYear) {
//     console.log(` i was born in ${birthYear} years`);
//     return 2022 - birthYear;
// }
// //in case of function declaration , we can call the function before we have call that
// const age = calculateAge(2000);
// console.log(age);
// fn exp
// const agrethree = calculateAgeExp(1991, "shyam"); // can call expression before initialisation
// console.log(agethree);
//expresions


const calculateAgeExp = function(birthYear, name) {
    console.log(`${name} was born in ${birthYear}`);
    return 2022 - birthYear;

}



// fat allow fn=> used in ES6 on
const calculateAgeExpArrow = (birthYear) => 2022 - birthYear;
console.log(calculateAgeExpArrow(1995));

const beforeIRetire = (birthYear) => {
    const myAge = 2022 - birthYear;
    const retire = 60 - myAge;
    return retire;
}
console.log(beforeIRetire(1990));