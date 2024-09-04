async function verfyEmailAdress(email , confirmEmail) {
    return await fetch("https://dnwebapi.liara.run/api/verifyEmail" , { 
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "confirmEmail": confirmEmail
        }
    })
}

export { verfyEmailAdress }