//AJAX asynchronousjs and xml//now its AJAJ last word is JSON
//JSON for storing and transforming data 
//JSON-Js object notation

//HTTP request-communication betweenclient and server
//API= Appkication programing Interface


//loads data from server and update the page selectively , doesnot reload the page

//xml ajax
//using built in object that ajax is using for//it is faster than js

//get data 
//post
//put
//head
//get is use to send data to a server
//post


const getBtn = document.querySelector('#getBtn');
const postBtn = document.querySelector('#postBtn');
[]
const userData11 = (method, url, data) => {

        const promise1 = new Promise((res, rej) => {
                //1. instating obj
                const xhr = new XMLHttpRequest();
                //2  open the object
                //method - http method -get or post

                xhr.open(method, url, data)
                    // xhr.open('Get', 'https://reqres.in/api/users');

                xhr.responseTypes = 'json'
                    //avoiding data
                if (data) {
                    xhr.setRequestHeader('content-type', 'application/json')
                }
                // when ur response is ready 
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status <= 400) {
                        {
                            res(xhr.response)
                        } else {
                            rej(xhr.response)
                        }
                    }
                    xhr.onError = () => {
                        rej("sorry!...error is there..its been rejected")
                    }
                    xhr.send(JSON.stringify(data))
                }) return promise1;
        }
        const getUser = () => {
            userData11('GET', 'https://reqres.in/api/users').then(responseData => {
                console.log(responseData)
            })
        }
        const postUser = () => {
            userData11('POST', 'https://reqres.in/api/users', {
                "name": "khushi",
                "job": "leader"
            }).then(responseData => {
                console.log(("my response after post"), responseData)
            }).catch(responseData => {
                console.log(error => { console.log })
            })
        }
        getBtn.addEventListener('click', getUser)
        postBtn.addEventListener('click', getUser)


        //1 instantiate xhr object to interact with the server
        //JSON.parse()
        //JSON.stringify()=js obj to json string, optionally replace value