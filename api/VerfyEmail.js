async function verfyEmail(email, userToken) {
    const response = await fetch("http://localhost:3001/api/sendEmailVerify", {
        headers: {
            "Content-Type": "application/json",
            "email": email,
            "userToken": userToken,
        },
    });
    return response;
}
export { verfyEmail }