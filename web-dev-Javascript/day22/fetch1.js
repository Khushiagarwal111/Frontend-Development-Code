//https: //codeshare.io/EBQjyP
// fetch by
// default uses promises

const getBtn = document.querySelector('#getBtn')
const postBtn = document.querySelector('#postBtn')

const userData = (method, url, data) => {
    return fetch(url, {
        method: method,
        headers: data ? { 'content-Type': 'application/json' } : {},
        body: JSON.stringify(data)

    }).then(response => {
        if (response.status >= 400) {
            return response.json().then(() => {
                    console.log("failed")
                }

            )
        }
        return response.json()

    })
}

const getUser = () => {
    userData('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData)
    })
}

const postUser = () => {
    userData('POST', 'https://reqres.in/api/users', {
            "name": "morpheus",
            "job": "leader"
        }).then(responseData => {
            console.log("my response after post using fetch", responseData)
        })
        .catch(error => {
            console.log(error)
        })

}


getBtn.addEventListener('click', getUser)
postBtn.addEventListener('click', postUser)