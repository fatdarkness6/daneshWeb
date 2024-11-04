async function sendCodeForGmail(props) {
    return await fetch("https://dnwebapi.liara.run/api/sendCodeToEmail" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(props)
    })
}

export  {sendCodeForGmail}