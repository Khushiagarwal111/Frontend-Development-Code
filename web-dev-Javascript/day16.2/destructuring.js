// const gameResults = ['Ram', 'Shyam', 'Jaduu', 'Madhu', 'Ravi'];
// // const gold = gameResults[0];
// // const silver = gameResults[1];
// // const bronze = gameResults[2];
// // const gold = gameResults[0];
// // const silver = gameResults[1];
// // const bronze = gameResults[2];
// // console.log(gold);
// // console.log(silver);
// // console.log(bronze);
// // //destructuring
// // //its short syntaxto unpack
// // // gameResults = ['Ram', 'Shyam', 'Jaduu', 'Madhu', 'Ravi'];
// // console.log(gold);
// // console.log(silver);
// // console.log(bronze);
// // the value from thr array into distinct variation
// const [gold, silver, bronze] = gameResults; // array destructing
// const [first, , , fourth] = gameResults; //
// /*...
// ....*/
// const [winner, middle, ...others] = gameResults // Rest operator
// // winner is one and all other names in others['Ram', 'Shyam', 'Jaduu', 'Madhu', 'Ravi'];
// console.log(gold);
// console.log(silver);
// console.log(bronze);
// console.log(first);
// console.log(fourth);
// console.log(winner);

//destructing: short syntax to unpack thr property

const participant = {
    name1: "Ramm",
    age: "infinity",
    address: "Ayodhya",
    title: "King of Ayodhya",
};
const { name1: Name, title: honour, ...infos } = participant;
console.log(Name);
console.log(honour);
console.log(infos);
// const IPL: {
//     Team1: {
//         name: CSK;
//         members: 20;
//         score: 202;
//         isWinner: false;

//     }
//     Team2: {
//         name: RCB;
//         members: 12;
//         score: 232;
//         isWinner: true;
//     }
// }
// const IPL = document.createElement("ul");
// for (let game of IPL) {
//     const { Team2, Team1 } = game;

//     const li = document.createElement("li");
//     const { team: T1, score: T2Score } = Team1;
//     const { team: T2, score: T1Score } = Team2;


//     const teamNames = `$`
// }