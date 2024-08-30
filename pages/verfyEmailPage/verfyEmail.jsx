import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { verfyEmailAdress } from "../../api/VerfyEmail";

export default function VerfyEmailPage() {


    let params = useParams();
    let {userToken , email} = params;
    console.log(userToken, email);

    useEffect(() => {
        if (userToken !== undefined && email !== undefined) {
            verfyEmailAdress(email, userToken).then((e) => {
                return e.json()
            }).then((e) => {
                console.log(e)
            })
        }
    } , [])

    return (
        <>
        
        <h1>
            email verfied :)
        </h1>

        </>
    )
}