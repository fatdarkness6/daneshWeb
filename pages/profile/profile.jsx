import { useEffect , useState } from "react";
import Layout from "../../components/layout/layout";
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
               return  <h1>{e.name}</h1>
            })}
        <Footer/>
        </>
          
    )
}