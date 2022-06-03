import "../css/authPage.css"

export const LoginForm =()=>{

    return(
        <>
        
        <div className="form">
            <div className="switches">
                        
                <div className="switch-not-active">Регистрация</div>
                <div className="switch-l ">Войти</div>
            </div>

            <div className="title">Вход</div>
            <div className="input-field">
                <div className="field-name">Имя пользователя</div>
                <input type="text"></input>
            </div> 
            <div className="input-field">
                <div className="field-name">Пароль</div>
                <input type="password"></input>
            </div>  
            <button className="register_button">Войти</button> 

        </div>
        </>
    )
}