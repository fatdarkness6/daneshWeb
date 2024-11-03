import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"
import { verfyEmailAdress } from "../../services/VerfyEmail";

export default function VerifyEmailPage() {

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