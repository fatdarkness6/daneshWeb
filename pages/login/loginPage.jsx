import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { useEffect, useState } from "react";
import { loginUser } from "../../api/login";
import { createPortal } from "react-dom";
import registerImage from "../../public/register.png";
import { verfyEmail } from "../../api/VerfyEmail";
export default function LoginPage() {

    const [usernameOremail, setUsernameOremail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginError, setLoginError] = useState(false)
    const [errorUsernameOremail, setErrorUsernameOremail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [openPortal, setOpenPortal] = useState(false)
    const [userToken, setUserToken] = useState("")

    const redirect = useNavigate()

    function saveDataInLocalStorage(data) {
        if(data.verifyEmail == false) {
            setUserToken(data.token)
            setOpenPortal(true)
        }else {
            localStorage.setItem("userData", data.token);
        redirect("/profile");

        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            setLoginError(false)
        }, 5000)
    }, [LoginError])
    useEffect(() => {
        if (usernameOremail.length >1) {
            setErrorUsernameOremail(false)
            
        }
        if (password.length > 1) {
            setErrorPassword(false)
        }
    }, [usernameOremail, password])



    useEffect(() => {
        if (openPortal) {
           
            verfyEmail(usernameOremail, userToken).then((e) => {
                return e.json()
            }).then((e) => {
                console.log(e)
            })
        }

    }, [openPortal])


    return (
        <Layout>
            <div className="loginPage">
                {openPortal && createPortal(
                    <div className="portal">
                    <div className="portal-content">
                        <img src={registerImage} alt="Register" />
                        <h1> Verify Gmail </h1>
                        <p>Email has been sent to your Gmail...</p>
                    </div>
                </div>,
                document.body
                )}
                <div className="loginPage-content">
                    <form className="loginPage-content-form" onSubmit={(e) => {
                        e.preventDefault();
                        let data = {
                            usernameOremail,
                            password
                        }
                        if (usernameOremail == "" && password == "") {
                            setErrorUsernameOremail(true)
                            setErrorPassword(true)

                        }else if(usernameOremail == "" && password !== "") {
                            setErrorUsernameOremail(true)
                        }else if(usernameOremail !== "" && password == "") {
                            setErrorPassword(true)
                        }  else {
                            loginUser(data).then((e) => {
                                return e.json()
                            }).then((e) => {

                                if (e == "User not found" || e == "Internal server error" || e == "Password is incorrect") {
                                    setLoginError(e)
                                    return
                                } else {
                                    saveDataInLocalStorage(e)
                                }
                            })
                        }
                    }} >
                        <div className="state">
                            <input className={errorUsernameOremail && "redOutLine"} placeholder=" Email" type="text" onChange={(e) => {
                                setUsernameOremail(e.target.value)
                            }} />
                            <h4 className={errorUsernameOremail && "red"}>{errorUsernameOremail && "fill out the form"}</h4>
                        </div>
                        <div className="state">
                            <input className={errorPassword && "redOutLine"} placeholder="Password" type="password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <h4 className={errorPassword && "red"}>{errorPassword && "fill out the form"}</h4>
                        </div>
                        <button>Login</button>
                        <p className="red">{LoginError}</p>
                    </form>
                    <h4>You dont have an account? <Link to="/register">Register</Link> Now</h4>
                </div>
            </div>
        </Layout>
    )
}