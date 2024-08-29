import { useState, useEffect } from "react";
import { setUser } from "../../api/register";
import Layout from "../../components/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import registerImage from "../../public/register.png";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorPass, setErrorPass] = useState(false);
    const [filloutAlert, setFilloutAlert] = useState(false);

   
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    
    const [openPortal, setOpenPortal] = useState(false);
    const [counter, setCounter] = useState(5);

    const redirect = useNavigate();

    useEffect(() => {
        let interval;

        if (openPortal) {
            interval = setInterval(() => {
                setCounter((prevCounter) => {
                    
                    if (prevCounter <= 1) {
                        clearInterval(interval) 
                        redirect("/login");
                    }
                    return prevCounter - 1;
                });
            }, 1000);
        }

        
    }, [openPortal, redirect]);

    // Form validation logic
    useEffect(() => {
        if (confirmPassword === "") {
            setErrorPass(false);
        } else if (confirmPassword.length > 1) {
            setFilloutAlert(false);
        }
        if (name.length > 1) setErrorName(false);
        if (lastName.length > 1) setErrorLastName(false);
        if (username.length > 1) setErrorUsername(false);
        if (phone.length > 1) setErrorPhone(false);
        if (email.length > 1) setErrorEmail(false);
        if (password.length > 1) setErrorPassword(false);
    }, [confirmPassword, name, lastName, username, phone, email, password]);

    function generateUserToken(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let token = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
        return token;
    }

    const userToken = generateUserToken(16);

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            name,
            lastName,
            username,
            phone,
            email,
            password,
            userToken,
        };

        if (!name || !lastName || !username || !phone || !email || !password || !confirmPassword) {
            // Check if any field is empty and set appropriate error states
            setErrorName(!name);
            setErrorLastName(!lastName);
            setErrorUsername(!username);
            setErrorPhone(!phone);
            setErrorEmail(!email);
            setErrorPassword(!password);
            setErrorPass(password !== confirmPassword);
            setFilloutAlert(!confirmPassword);
            return;
        }

        if (password !== confirmPassword) {
            setErrorPass(true);
            return;
        }

        
        setUser(data)
            .then((response) => response.json())
            .then((result) => {
                if (result === "User has been registered successfully") {
                    setOpenPortal(true);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Layout>
            <div className="registerPage">
                {openPortal &&
                    createPortal(
                        <div className="portal">
                            <div className="portal-content">
                                <img src={registerImage} alt="Register" />
                                <h1>Successfully registered</h1>
                                <button
                                    onClick={() => {
                                        setOpenPortal(false);
                                        redirect("/login");
                                    }}
                                >
                                    OK
                                </button>
                                <p>Redirecting to the login page in {counter} seconds...</p>
                            </div>
                        </div>,
                        document.body
                    )}
                <div className="registerPage-content">
                    <form className="registerPage-content-form" onSubmit={handleSubmit}>
                        <div className="state">
                            <input
                                className={errorName ? "redOutLine" : "ok"}
                                placeholder="Name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <p className={errorName ? "red" : "ok"}>{errorName && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorLastName ? "redOutLine" : "ok"}
                                placeholder="Last Name"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <p className={errorLastName ? "red" : "ok"}>{errorLastName && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorUsername ? "redOutLine" : "ok"}
                                placeholder="Username"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p className={errorUsername ? "red" : "ok"}>{errorUsername && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorPhone ? "redOutLine" : "ok"}
                                placeholder="Phone Number"
                                type="number"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <p className={errorPhone ? "red" : "ok"}>{errorPhone && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorEmail ? "redOutLine" : "ok"}
                                placeholder="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className={errorEmail ? "red" : "ok"}>{errorEmail && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorPassword ? "redOutLine" : "ok"}
                                placeholder="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className={errorPassword ? "red" : "ok"}>{errorPassword && "Please fill out this field"}</p>
                        </div>

                        <div className="state">
                            <input
                                className={errorPass || filloutAlert ? "redOutLine" : "ok"}
                                placeholder="Confirm Password"
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <p className={errorPass || filloutAlert ? "red" : "ok"}>
                                {filloutAlert ? "Please fill out this field" : errorPass && "Passwords do not match"}
                            </p>
                        </div>

                        <button type="submit">Register</button>
                    </form>
                    <h4>
                        Already have an account? <Link to="/login">Login</Link> now.
                    </h4>
                </div>
            </div>
        </Layout>
    );
}