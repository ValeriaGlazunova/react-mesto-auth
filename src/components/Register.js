import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Register ({onRegister}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailPut(e) {
        setEmail(e.target.value);
    }

    function handlePasswordPut(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister({password, email});
    }

    return (
        <>
        <Header headerName="Войти" link='/sign-in' />
        <section className='register'>
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__input-container">
                <input value={email} name="email" className="register__input register__input_type_email" type="email" required placeholder="Email" onChange={handleEmailPut} />
                <input value={password} name="password" className="register__input register__input_type_password" type="password" required placeholder="Пароль" onChange={handlePasswordPut} />
            </div>
            <button type="submit" className="register__submit-btn">Зарегистрироваться</button>
        </form>
        <p className="register__subtitle">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
        </section>
        </>
    );
    }
    
    export default Register;