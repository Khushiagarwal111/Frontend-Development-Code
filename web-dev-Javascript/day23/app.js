//asyn fn are nice syntactic sugar for promises
//clean and easy syntax 
//clean and easy syntax for promises//
// function myName() {
//     return "khushi"
// }

//if is use async fn becomes async function

//the fn is now a async fn 
//return's u promise
//now this function going to return a promise


//
// async function myName() {
//     return "Gargi"
// }
// // this is my promise
// myName.then((data) => {
//         console.log("my promise is resolved", data); //
//     })
//add two numbers
// async function addition(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject("a andd b should be number ")
//         }
//         resolve(a + b)
//     })
// }
async function addition(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw "a andd b should be number "
    }
    return a + b
}
addition(101, 111)
    .then((data) => {
        console.log("My promise is resolved", data)
    })
    .catch((error) => {
        console.log("Promise rejected")
    })