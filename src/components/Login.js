import React from "react";
import Header from "./Header";

function Login () {
return (
    <>
    <Header headerName="Регистрация" link='/' />
    <section className='login'>
    <h2 className="login__title">Вход</h2>
    <form className="login__form">
        <div className="login__input-container">
            <input className="login__input login__input_type_email" type="text" required placeholder="Email"/>
            <input className="login__input login__input_type_password" type="text" required placeholder="Пароль"/>
        </div>
        <button type="submit" className="login__submit-btn">Войти</button>
    </form>
    </section>
    </>
);
}

export default Login;