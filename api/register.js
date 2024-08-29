
async function setUser(data) {
   
    return await fetch("http://localhost:3001/api/register" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

export  {setUser};