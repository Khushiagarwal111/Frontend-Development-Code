const getBtn = document.querySelector('#getBtn')
const postBtn = document.querySelector('#postBtn')

const getUser = () => {
    axios.get('https://reqres.in/api/users').then(response => {
        console.log("Reponse from axios get", response)
    })
}
const postUser = () => {
    axios.post('https://reqres.in/api/users', {
        "name": "morpheus",
        "job": "leader"
    }).then(response => {
        console.log('response from post ,axios', response)
    })
}


getBtn.addEventListener('click', getUser)
postBtn.addEventListener('click', postUser)