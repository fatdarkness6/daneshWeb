async function contactPage(values) {
  return  await fetch("https://dnwebcommits.liara.run/api/communicate" , {
        method : "POST" , 
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify(values)
    })
}
export {contactPage}