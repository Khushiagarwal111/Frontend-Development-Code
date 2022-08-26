//fetch by default

const getBtn = document.querySelector('#getBtn');
const postBtn = document.querySelector('#postBtn');

const userData = (method, url, data) => {
    return fetch(url, {
            method: method,
            headers: data ? { 'content-Type': 'application/json' } : {},
            bdy: JSON.stringify(data)
        }

    ).then((response) => {
        if (response.status >= 400) {
            return response.json().then(() => {
                console.log("failed")
            })
        }
    })
}

const getUser = () => {
    userData('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData)
    })
}
const postUser = () => {
    userData('POST', 'https://reqres.in/api/users', {
        "name": "khushi",
        "job": "leader"
    }).then(responseData => {
        console.log(("my response after post"), responseData)
    }).catch(responseData => {
        console.log(error)
    })
}
getBtn.addEventListener('click', getUser)
postBtn.addEventListener('click', getUser)