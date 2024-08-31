
async function setUser(data) {
   
    return await fetch("https://dnwebapi.liara.run/api/register" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

export  {setUser};