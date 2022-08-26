//await used in asyn fn 
//then it will pause the execution  the function 
// we will the execution of the function while it is waiting for the promise... 
//get resolved



//option 1
async function userInfo() { // its async fn=>means returning a promise
    const response = await axiox.get('https://reqres.in/api/users') //passing dummy rest api url
        //returns a promsie
    const response = await axiox.get('https://reqres.in/api/users')
    console.log("Response from axiox function",
        response)
}
userInfo().catch((error) => {
        console.log(error)
        console.log("I am inside error");
    })
    //option 2
async function userInfo() {
    try {
        const response = await axios.get('https://ress.in/api/')
        console.log(" inside catch getting error")
    } catch (error) {
        console.log(" inside catch ")
    }
}

// const response = await axiox.get('https://reqres.in/api/users')

/*function userInfo(){
    return axios.get(https://reqres.in/api/user)
}
userInfo().then(response)=>{
    console.log(response)
    )}*/