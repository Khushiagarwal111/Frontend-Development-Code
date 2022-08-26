//promise
//this is a page request fn 
//it will take 1 second
//depending on the url passing
const pageRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/user': [
                    { id: 1, username: 'Asha' },
                    { id: 2, username: 'gargi' }
                ],
                '/home': "This is my home page!"
                '/about': "This is my about page"

            }
            const data = pages[url];
            if (data) {
                resolve({
                    status: 100,
                    data
                })
            } else {
                reject({ status: 404 })
            }

        }, 1000);
    })
}
pageRequest('/users')
    .then((res) => {
        console.log('give me the response', res.data)
        console.log('status update', res.status);
        console.log('request success')
    })
    .catch((res) => { console.log("error", res.status) })