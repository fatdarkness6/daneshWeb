async function verfyEmail(email) {
    const response = await fetch("https://dnwebapi.liara.run/api/sendEmailVerify", {//
        headers: {
            "Content-Type": "application/json",
            "email": email,
        },
    });
    return response;
}
export { verfyEmail }