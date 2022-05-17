//loops
//for loop
//while loop
//with while loop we can put infinite loop 
let j = 0;
while (j < 10) {
    j++;
    console.log(j);
    if (j == 11) {
        console.log(j);
        break;

    }
}

//do while loop execute  before checking the loop


let newNum = 34;
do {
    console.log(newNum); //An expression evaluates to a value, A statement executes something 
}
while (newNum > 10) {
    console.log(newNum);
}
const number = [1, 2, 3, 4, 5];
for (let x of number) {
    console.log(number[x]);
}