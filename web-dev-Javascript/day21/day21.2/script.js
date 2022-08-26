// //promises
// // this is a page request function
// // it will take 1 second to resolve or reject the promise
// //depending on the url passing
// const pageRequest = ((url) => {
//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 const pages = {
//                     '/users': [
//                         { id: 1, username: 'Asha' },
//                         { id: 2, username: 'Gargi' }
//                     ],
//                     '/home': "This is my home page!",
//                     '/about': "This is my about page!"
//                 }

//                 const data = pages[url];
//                 if (data) {
//                     resolve({ status: 100, data })
//                 } else {
//                     reject({ status: 404 })
//                 }
//             }, 1000);
//         })
//     }

//     pageRequest('/users')
//     .then((res) => {
//         console.log('Data of users', res.data)
//         console.log('Status', res.status)
//         console.log(" request success ")
//     })
//     .catch((res) => {
//         console.log('Status', res.status)
//         console.log(" request failure ")
//     }) * /


//     //promise chaining
//     // this is a page request function
//     // it will take 1 second to resolve or reject the promise
//     //depending on the url passing
//     const pageRequest = (url) => {
//         return new Promise((resolve, reject) => {

//                 setTimeout(() => {
//                         const pages = {
//                             '/users': [
//                                 { id: 1, username: 'Asha' },
//                                 { id: 2, username: 'Gargi' }
//                             ],
//                             '/users/1': {
//                                 id: 1,
//                                 username: 'Asha',
//                                 city: 'kolkata',
//                                 bestblogid: 111
//                             },
//                             '/users/2': {
//                                 id: 2,
//                                 username: 'Gargi',
//                                 city: 'Bangalore',

//                             },
//                             '/blogs/111': {
//                                 id: 111,
//                                 info: "Here is my daughter's Bangalore blog post"
//                             },
//                             '/home': "This is my home page!",
//                             '/about': "This is my about page!"
//                         })

//                     const data = pages[url];
//                     if (data) {
//                         resolve({ status: 100, data })
//                     } else {
//                         reject({ status: 404 })
//                     }
//                 }, 1000);
//         })
// }

// pageRequest('/users')
//     .then((res) => {
//         console.log('Data of users', res)
//         const id = res.data[0].id
//         return pageRequest(`/users/${id}`);
//     })
//     .then((res) => {
//         console.log("my blog id", res);
//         const blogid = res.data.bestblogid;
//         return pageRequest(`/blogs/${blogid}`)
//     })
//     .then((res) => {
//         console.log("best blog details", res)
//     })
//     .catch((err) => {
//         console.log(" Could not find blog details ")
//     })
//
/* //promises
// this is a page request function
// it will take 1 second to resolve or reject the promise
//depending on the url passing
const pageRequest= (url)=>{
	return new Promise((resolve,reject)=>{

		setTimeout(()=>{
			const pages={
				'/users': [
					{id:1,username:'Asha'},
					{id:2,username:'Gargi'}
				],
				'/home': "This is my home page!",
				'/about':"This is my about page!"
			}

			const data=pages[url];
			if(data){
				resolve({status: 100,data})
			}
			else{
				reject({status: 404})
			}
		},1000);
	})
}

pageRequest('/users')
.then((res)=>{
	console.log('Data of users',res.data)
	console.log('Status',res.status)
	console.log(" request success ")
})
.catch((res)=>{
	console.log('Status',res.status)
	console.log(" request failure ")
}) */


//promise chaining
// this is a page request function
// it will take 1 second to resolve or reject the promise
//depending on the url passing

const pageRequest = (url) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Asha' },
                    { id: 2, username: 'Gargi' },
                    { id: 3, username: 'khushi' },
                    { id: 4, username: 'tom' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'Asha',
                    city: 'kolkata',
                    bestblogid: 111
                },
                '/users/2': {
                    id: 2,
                    username: 'Gargi',
                    city: 'Bangalore',

                },
                '/users/1/blogs/111': {
                    id: 111,
                    info: "Here is my daughter's Bangalore blog post"
                },
                '/home': "This is my home page!",
                '/about': "This is my about page!"
            }

            const dataofurl = pages[url];
            if (dataofurl) {
                resolve({ status: 200, dataofurl })
            } else {
                reject({ status: 404 + "page not found" })
            }
        }, 1000);
    })
}

pageRequest('/users')
    .then((res) => {
        console.log('Data of users', res)
        const id = res.dataofurl[0].id
        return pageRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log("my blog id", res);
        const blogid = res.data.bestblogid;
        return pageRequest(`/blogs/${blogid}`)
    })
    .then((res) => {
        console.log("best blog details", res)
    })
    .catch((err) => {
        console.log(" Could not find blog details " + err)
    })
    //

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
    header.appendChild(myPara);
}


let myobject = populateHeader("khushi");
console.log(myobject);

let express = require('express');
let app = express();


app.listen(3000, () => console.log('listening 3000.....'));




















let express =