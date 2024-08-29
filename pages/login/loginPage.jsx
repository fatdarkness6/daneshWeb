import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { useEffect, useState } from "react";
import { loginUser } from "../../api/login";
export default function LoginPage() {

    const [usernameOremail, setUsernameOremail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginError, setLoginError] = useState(false)
    const [errorUsernameOremail, setErrorUsernameOremail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const redirect = useNavigate()

    function saveDataInLocalStorage(data) {
        localStorage.setItem("userData", data);
        redirect("/profile");
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
    return (
        <Layout>
            <div className="loginPage">
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
                            <input className={errorUsernameOremail && "redOutLine"} placeholder="Username OR Email" type="text" onChange={(e) => {
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