async function contactPage(values) {
  return  await fetch("https://api.web3forms.com/submit" , {
        method : "POST" , 
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify(values)
    })
}
export {contactPage}