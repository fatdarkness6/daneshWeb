import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"
import { verfyEmailAdress } from "../../api/VerfyEmail";

export default function VerfyEmailPage() {

    const [verfyEmail, setVerfyEmail] = useState("")

    let params = useParams();
    let { email , confirmEmail } = params;

    useEffect(() => {
        if (confirmEmail !== undefined && email !== undefined) {
            verfyEmailAdress(email, confirmEmail).then((e) => {
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