

async function getUsers(data) {
    return await fetch("https://dnwebapi.liara.run/api/getUser" , {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "userToken" : data
        }
    })
}
export {getUsers}