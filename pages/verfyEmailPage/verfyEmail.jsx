import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"
import { verfyEmailAdress } from "../../api/VerfyEmail";

export default function VerfyEmailPage() {

    const [verfyEmail, setVerfyEmail] = useState("")

    let params = useParams();
    let {userToken , email} = params;

    useEffect(() => {
        if (userToken !== undefined && email !== undefined) {
            verfyEmailAdress(email, userToken).then((e) => {
                return e.json()
            }).then((e) => {
                setVerfyEmail(e)
            })
        }
    } , [])

    return (
        <>
        
        <h1>
            {verfyEmail}
        </h1>

        </>
    )
}