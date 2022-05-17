// //assignment 2 of js
// const arr = [11, 2, 12, 2, 3, 12, 32, 22];
// const key = 2;
// let count = 0;
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == key) {
//         console.log(arr[i]);
//         break;
//     }
// }
// // } else if (arr[i] === key) {
// //     count++;
// //     if (count > 1) {
// //         console.log(a[i]);
// //         break;
// //     }
// // } 
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] != key) {
//         console.log(-1);
//         break;

//const Console = require("serverless/lib/classes/console");

//     }
// }
// // for (i = 0; i < arr.length; i++) {
// // if (arr.includes(key)) {
// //     console.log(key);
// // }

// // const mobile = [1, 2, 3, 4, , 5];
// // const mobileobj = {
// //     company: "realme",
// //     model: "realme 9 pro wow ",
// //     camera: 50,
// // }
// /*
// const str1 = "hello";
// const str2 = "wqwewq"; //check same length
// // then we can sort it
// let myName1 = "listen";
// let myName2 = "silent";

// let newStr1 = myName1.split("");
// let newStr2 = myName2.split("");
// // on top of split we can implement the sort method 
// console.log(newStr1);
// console.log(newStr2);
// //to sort this
// newStr1 = myName1.split("").sort();
// newStr2 = myName2.split("").sort();
// console.log(newStr1);
// console.log(newStr2);
// newStr1 = myName1.split("").sort().join("  ");
// newStr2 = myName2.split("").sort().join("  ");
// console.log(newStr1);
// console.log(newStr2);
// if (newStr1 === newStr2) {
//     console.log("anagrams");
// }*/


// let str = "hello";
// let estr = "";

// function reverse(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         estr += str[i];


//     }
//     return estr;
// }
// // let output = reverse("hello");
// // console.log(estr);

// // let num = 5;
// // let pattern1 = "";
// // for (let i = num; i >= 1; i--) { //outer for loop
// //     for (let j = num; j >= 1; j--) { //inner for loop
// //         // console.log(j)
// //         pattern1 += num - j;

// //     }
// //     pattern1 += "\n";
// // }
// // console.log(pattern1)
// // num -i
// let num = 6;
// let pattern1 = "";
// for (let i = 1; i <= num; i++) { //outer for loop
//     for (let j = 1; j < num - i + 1; j++) { //inner for loop
//         // console.log(j)
//         pattern1 += num - j;

//     }
//     pattern1 += "\n";
// }
// console.log(pattern1)
//     // num -i 


// //let OriginalArray = {};
// let OriginalArray = "hello" // = prompt("Enter an array");


// //fn declaration myFunction
// const output = function myFunction(a, b) {
//         return a * b;
//     }
//     // JavaScript function can also be defined using an expression.
//     //const x = function(a, b) { return a * b };
// let z = output(4, 3);
// console.log(output);
// console.log(z);




// const n = 5;
// const Oarr = [];
// for (let i = 0; i < n; i++) {
//     Oarr.push("Enter array");
// }
// console.log(Oarr);

// const n = 5;
// //parseInt(window.prompt("Enter no of elements in an array"));
// const Input = [11, 2, 32, 2, 12, 5, 65, 5];
// let i;
// for (i = 0; i < n; i++) {
//     Input.push("Enter array element: ");
// }
// numFind = 11; //window.prompt("Enter number to be searched:");
// resArr = [];
// 5 //
// for (i = 0; i < n; i++) {
//     if (Input[i] == numFind) resArr.push(i);
// }
// if (resArr.length == 0) {
//     console.log(-1);

// } else if (resArr.length == 1) {
//     console.log(resArr[0]);
// } else {
//     console.log(resArr);
// }
//const size = 6; //prompt("Enter no of array");
const OriginalArr = [1, 2, 32, 43, 34, 4, 534, 3, 2];
// for (let i = 0; i < size; i++) {

//     OriginalArr.push(parseInt("Enter  array to be sorted"));
// }
/*
function SortArr(OriginalArr) {
    let flag = false;
    while (!flag) {
        flag = true;
        for (let i = 0; i < OriginalArr.length - 1; i++) {
            if (OriginalArr[i] > OriginalArr[i + 1]) {
                flag = false;
                let temp = OriginalArr[i];
                OriginalArr[i] = OriginalArr[i + 1];
                OriginalArr[i + 1] = temp;
            }
        }
        // Console.log(OriginalArr);
        return OriginalArr;
    }
}
const x = SortArr(OriginalArr);
console.log(x);
console.log(OriginalArr); */
// const myOutput = console.log(x);
// console.log(myOutput);
// console.log(`Input: ${OriginalArr}`);

// console.log(`Output: [${OriginalArr.sort()}]`);

// let NewArr = [];
// NewArr = OriginalArr.sort();
// console.log(NewArr);
// console.log(`Output + ${NewArr}`);


function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

// var numbers = [12, 10, 15, 11, 14, 13, 16];
let numbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
    numbers.push(prompt("Enter a number"));
}
bubbleSort(numbers);
console.log(numbers);