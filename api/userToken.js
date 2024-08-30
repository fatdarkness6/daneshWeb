async function userToken(email, password) {
    return await fetch("http://localhost:3001/api/userToken" , {
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "password": password

        }
    })
}
export { userToken }