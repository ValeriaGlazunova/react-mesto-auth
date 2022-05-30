import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Register () {
    return (
        <>
        <Header headerName="Войти" link='/sign-in' />
        <section className='register'>
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form">
            <div className="register__input-container">
                <input className="register__input register__input_type_email" type="text" required placeholder="Email"/>
                <input className="register__input register__input_type_password" type="text" required placeholder="Пароль"/>
            </div>
            <button type="submit" className="register__submit-btn">Зарегистрироваться</button>
        </form>
        <p className="register__subtitle">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
        </section>
        </>
    );
    }
    
    export default Register;