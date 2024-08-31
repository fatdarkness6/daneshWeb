async function verfyEmailAdress(email , userToken) {
    return await fetch("https://dnwebapi.liara.run/api/verifyEmail" , {
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "userToken": userToken
        }
    })
}

export { verfyEmailAdress }