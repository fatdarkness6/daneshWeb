async function userToken(email, password) {
    return await fetch("https://dnwebapi.liara.run/api/userToken" , {
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "password": password

        }
    })
}
export { userToken }