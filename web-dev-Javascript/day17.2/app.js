//call stack
const students = {
    fname: 'Mujahidul',
    lname: "Islam",
    nickName: 'MJ',
    stuFullName() {
        const { fname, lname, nickName } = this;
        return `My name is ${fname} ${lname} my nickname is ${nickName}`;
    },
    stuInfo() {
        const info = this.stuFullName();
        console.log(`info ${info} my info`);

    },
};
students.stuInfo(); // its dry - donot rereat urself
// students.stuFullName();


//right angle triangle
// call stack
const multiply = (x, y) => x * y;
const square = (x) => {
    multiply(x, x);
}
const rightAngleTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}
rightAngleTriangle(3, 4, 5);
// console.log(rightAngleTriangle);

// call stack method :its mechanism where the js interpreter keeps track of its place in the script where multiple fn r called
//this is stored in form of stack(LIFO) and
//multiply
//square
//r(3,4,5)

//js is single threaded
console.log("I come first");

alert("I come second"); // window object
console.log("I come third");