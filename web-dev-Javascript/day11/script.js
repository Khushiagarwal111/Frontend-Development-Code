//palindrome series


const num = 12;
// parseInt(prompt(" Enter number of element"));
let n1 = 0;
let n2 = 1;
let n3;
for (let i = 1; i < num; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

}
//DOM