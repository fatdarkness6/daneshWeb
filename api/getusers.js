

async function getUsers(data) {
    return await fetch("http://localhost:3001/api/getUser" , {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "userToken" : data
        }
    })
}
export {getUsers}