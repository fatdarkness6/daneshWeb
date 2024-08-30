async function verfyEmailAdress(email , userToken) {
    return await fetch("http://localhost:3001/api/verifyEmail" , {
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "userToken": userToken
        }
    })
}

export { verfyEmailAdress }