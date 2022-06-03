import {React, useState} from "react";
import { RegisterForm } from "../components/registerForm";
import { Footer } from "../components/footer";
import { LoginForm } from "../components/loginForm";
import "../css/page.css"


export const AuthPage = () =>
{
    const [currentForm, setCurrentForm] = useState("login");

    return(
        <div className="page">
            <div className="auth-container">
                <button onClick={e => setCurrentForm("login")}>Login</button>
                <button onClick={e => setCurrentForm("register")}>Register</button>
                {currentForm == "login" ? 
                <LoginForm/> :
                <RegisterForm/>
                }
            </div>
            <Footer/>
        </div>
    )
}