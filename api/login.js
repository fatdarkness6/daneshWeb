async function loginUser(data) {
    return await fetch("http://localhost:3001/api/login", {
        headers: {
            "username" : data.usernameOremail,
            "password" :  data.password
        }
    })
}
export {loginUser}