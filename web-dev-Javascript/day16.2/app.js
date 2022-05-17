const IPL = [{ // nested object
        Team1: {
            team: "CSK",
            members: 14,
            score: 100,
            isWinner: false,

        },
        Team2: {
            team: "RCB ",
            members: 14,
            score: 200,
            isWinner: true,
        },
    },
    {
        Team2: {
            team: "CSK",
            members: 14,
            score: 182,
            isWinner: true,

        },
        Team1: {
            team: "RCB",
            members: 15,
            score: 122,
            isWinner: false,
        },

    },
    {
        Team2: {
            team: "CSK",
            members: 14,
            score: 202,
            isWinner: true,

        },
        Team1: {
            team: "RCB",
            members: 15,
            score: 122,
            isWinner: false,
        },
    }, {
        Team2: {
            team: "RCB",
            members: 14,
            score: 182,
            isWinner: true,

        },
        Team1: {
            team: "CSK",
            members: 15,
            score: 102,
            isWinner: false,
        },
    },
]
const ul = document.createElement("ul");
for (let game of IPL) {
    const { Team2, Team1 } = game;
    const li = document.createElement("li");
    const { team: T1, score: T1Score } = Team1;
    const { team: T2, score: T2Score } = Team2;


    const teamNames = `${T1} vs ${T2}`;
    if (T1Score > T2Score) {
        scoreBoard = `<b>${T1Score}</b> - ${T2Score}`
    } else {
        scoreBoard = `${T1Score}  - <b>${T2Score}</b>`
    }
    const myTeam = T2 === 'RCB' ? Team2 : Team1;
    li.classList.add(myTeam.isWinner ? "win" : "lose");
    li.innerHTML = `${teamNames} ${scoreBoard}`;
    ul.appendChild(li);

}
document.body.prepend(ul);