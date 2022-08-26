// Callback hell
// promises
// resolve or keep the promises
//rejected
const aviWillGetIphone = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.random();
        console.log(num);
        if (num > 0.8) {
            resolve();
        } else {
            reject();
        }
    }, 2000)
});
aviWillGetIphone.then(() => {
        console.log("Avi got a Iphone");
    })
    //if ur promise is resolved thena
aviWillGetIphone.catch(() => {
        console.log("Avi's father will give Iphone later");
    })
    // })
const partyForAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            console.log(num);
            if (num > 0.8) {
                resolve();
            } else {
                reject({
                    status: "404 error"
                });
            }
        }, 2000)
    });
}
partyForAll.then(() => {
        console.log("got the page");
    })
    //if ur promise is resolved thena
partyForAll.catch((res) => {
        console.log(res.status);
        console.log("Couldn't find the page");
    })
    // })