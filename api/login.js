async function loginUser(data) {
    return await fetch("https://dnwebapi.liara.run/api/login", {
        headers: {
            "username" : data.usernameOremail,
            "password" :  data.password
        }
    })
}
export {loginUser}