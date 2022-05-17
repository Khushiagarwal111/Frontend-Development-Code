// // DOM -
// //Document Object Model - structured representation of the HTML Documents
// // In a DOM tree - each HTML element is an object
// // for each and every element in the html document
// // there is one element node in the dom tree
// //document object (always on top of the dom tree )works as the entry point

// /* const grand = document.getElementById("grandpaaid");
// //const parent = document.getElementById("parentid");

// //const parent = Array.from(document.getElementsByClassName("parent")); */
// //const grand = Array.from(document.getElementsByClassName("grandpa")); */

// // const grand = document.querySelectorAll("#grandpaaid");

// //parent.forEach(color); */
// /* function color(val) {
//   val.style.backgroundColor = "yellow";
// } */

// //color(grand);
// //color(parent); */

// /* const grand = document.getElementById("grandpaaid");
// //const parent = document.getElementById("parentid");

// const parent = Array.from(document.getElementsByClassName("parent")); */
// //const parent = Array.from(document.getElementsByClassName("parent"));
// //const parent1= parent[0]

// // const grand = document.querySelectorAll("#grandpaaid");

// /* parent.forEach(color);
// function color(val) {
//   val.style.backgroundColor = "yellow";
// } */

// //color(grand);
// //color(parent); */ */

// /* const parent = Array.from(document.querySelectorAll(".parent1"));

// parent.forEach(color);
// function color(val) {
//   val.style.backgroundColor = "yellow";
// } */

// //color(parent);

// //const grand= document.querySelector('.grandpa')

// // querySelector
// /* const parent = document.querySelectorAll(".parent");

// parent.forEach(color);
// //color(parent);
// function color(val) {
//   val.style.backgroundColor = "yellow";
// } */

// // select the children of parent
// const grand = document.querySelector(".grandpa");
// const parent = Array.from(grand.children);
// const parent1 = parent[0];
// const child1 = parent1.children;
// /* parent.forEach(color); */
// color(child1[0]);

// function color(val) {
//     val.style.backgroundColor = "yellow";
// }
const num = 2;
if (num < 0) {
    console.log("Enter a positive number");
} else if (num == 0) {
    console.log("the factorial of 0 is 1")
} else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;

        // or factorial*=i
        // i--> 1,2,3,4,5,6
    }
    console.log(factorial);

}