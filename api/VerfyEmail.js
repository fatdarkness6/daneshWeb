async function verfyEmail(email) {
    const response = await fetch("http://localhost:3001/api/sendEmailVerify", {
        headers: {
            "Content-Type": "application/json",
            "email": email,
        },
    });
    return response;
}
export { verfyEmail }