import { useEffect , useState } from "react";
import { getUsers } from "../../api/getusers";
import Footer from "../../components/footer/footer";

export default function Profile() {


    const [users, setUsers] = useState([])

    function getUserData() {
        let data = localStorage.getItem("userData");
        return data
    }
    useEffect(() => {
        getUsers(getUserData()).then((e) => {
            return e.json()
        }).then((e) => {
            setUsers(e)
        })
    } , [])
    return(
        <>
          {users.map((e) => {
               return (
                <>
                    <h1>{e.name}</h1>
                    <h1>{e.email}</h1>
                    <h1>{e.password}</h1>
                    <h1>{e.phone}</h1>
                    <h1>{e.lastname}</h1>
                    <h1>{e.username}</h1>

                </>
               )  
            })}
        <Footer/>
        </>
          
    )
}