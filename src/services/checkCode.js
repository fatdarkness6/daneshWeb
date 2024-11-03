async function checkCodeForEmail(props) {
    return await fetch("https://dnwebapi.liara.run/api/loginWithCode" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(props)
    })
}
export { checkCodeForEmail }