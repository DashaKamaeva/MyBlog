import "../css/authPage.css"
import {React, useState} from 'react'
import { useHttp } from "../hooks/http.hook";

export const RegisterForm =()=>{

    const [form,setForm]=useState({
        login:``,email:``, password:``, confirmPassword:``
    });

    const {request} = useHttp();

    const changeHandler = event =>{
        setForm({...form, [event.target.id]:event.target.value})
    }

    const register =async()=>{
        const data = await request("/api/auth/register", "POST", form);
        console.log(data);

    }
    return(

        <>
        <div className="form">
            <div className="switches">
                        
                        <div className="switch-l" >Регистрация</div>
                        <div className="switch-not-active ">Войти</div>
                    </div>
            <div className="title">Регистрация</div>
            <div className="input-field">
                <div className="field-name">Почта</div>
                <input type="email" id="email" onChange={e=>changeHandler(e)} ></input>
            </div>  
            <div className="input-field">
                <div className="field-name">Имя пользователя</div>
                <input type="text" id="login" onChange={e=>changeHandler(e)}></input>
            </div> 
            <div className="input-field">
                <div className="field-name">Пароль</div>
                <input type="password" id="password" onChange={e=>changeHandler(e)}></input>
            </div> 
            <div className="input-field">
                <div className="field-name">Повторите пароль</div>
                <input type="password" id="confirmPassword" onChange={e=>changeHandler(e)}></input>
                
            </div>  
            <button className="register_button" onClick={e=> register()}>Зарегистрироваться</button> 
            

        </div>
        </>
    )
}