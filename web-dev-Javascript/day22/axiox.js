const getBtn = document.querySelector('#getBtn')
const postBtn = document.querySelector('#postBtn')

const getUser = () => {
    axios.get('https://reqres.in/api/users').then(response => {
        console.log("Response after post using fetch", response)
    });
}
const postUser = () => {
    axios.post('https://reqres.in/api/users').then(re)
}