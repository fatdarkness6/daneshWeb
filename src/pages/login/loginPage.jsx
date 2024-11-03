import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { useEffect, useRef, useState } from "react";
import { loginUser} from '../../services/login'
import { createPortal } from "react-dom";
import registerImage from "../../../public/register.png";
import { verfyEmailAdress } from "../../services/VerfyEmail";
import { sendCodeForGmail } from "../../services/sendCode";
import { checkCodeForEmail } from "../../services/checkCode";
export default function LoginPage() {

    const [usernameOremail, setUsernameOremail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginError, setLoginError] = useState(false)
    const [errorUsernameOremail, setErrorUsernameOremail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [openPortal, setOpenPortal] = useState(false) // this state is for portal
    const [sendCode, setSendCode] = useState(false)// this state is for send code to email and open  sendEmailportal
    const [code, setCode] = useState("") // this state is for code value
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [updateUseEffectCheckCode, setUpdateUseEffectCheckCode] = useState(0)

    const redirect = useNavigate()
    let button = useRef(null)

    function saveDataInLocalStorage(data) {
        if(data.verifyEmail == false) {
            setOpenPortal(true)
        }else {
            setSendCode(true)
        }
        
    }
    useEffect(() => {
        document.title = "Login"
        window.scrollTo(0, 0)
    } , [])
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
            verfyEmail(usernameOremail).then((e) => {
                return e.json()
            }).then((e) => {
                console.log(e)
            })
        }
    }, [openPortal])


    useEffect(() => {
        let data = {
            email: usernameOremail,
            password: password
        }
        if (usernameOremail !== "" && password !== "") {
            sendCodeForGmail(data).then((e) => {
            return e.json()
        }).then((e) => {
            console.log(e)
        })
        }
        
    }, [sendCode])

    useEffect(() => {
        let data = {
            email: usernameOremail,
            password: password,
            code: code
        };
    
        if (usernameOremail && password && code) {
            checkCodeForEmail(data).then((e) => e.json()).then((response) => {
                if(response === "Code is incorrect") {
                    setIsButtonDisabled(false);
                } else {
                    localStorage.setItem("token", JSON.stringify(response));
                    redirect("/");
                }
            });
        }
    }, [updateUseEffectCheckCode]);
    

    return (
        <Layout>
            <div className="loginPage">
                {openPortal ? createPortal(
                    <div className="portal">
                    <div className="portal-content">
                        <img src={registerImage} alt="Register" />
                        <h1> Verify Gmail </h1>
                        <p>Email has been sent to your Gmail</p>
                            <button onClick={() => {
                                setOpenPortal(false)
                            }}>OK</button>
                    </div>
                </div>,
                document.body
                ) : sendCode && createPortal(
                    <div className="portal">
                    <div className="portal-content">
                        <img src={registerImage} alt="Register" />
                        <h1> Enter the code </h1>
                        <input type="number" placeholder="Code" onChange={(e) => {
                            setCode(e.target.value)
                        }} />
                        <p>Code has been sent to your Gmail</p>
                            <button ref={button} className={isButtonDisabled && "disabled"} disabled={isButtonDisabled}  onClick={() => {
                                setUpdateUseEffectCheckCode(prev => prev + 1);
                                setIsButtonDisabled(true);
                            }}>check</button>
                    </div>
                </div>,
                document.body
                ) }
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