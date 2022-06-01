import React from "react";

function Login ({onLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailPut(e) {
        setEmail(e.target.value);
    }

    function handlePasswordPut(e) {
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();
        onLogin({password, email});
    }


return (
    <section className='login'>
    <h2 className="login__title">Вход</h2>
    <form className="login__form" onSubmit={handleLogin} >
        <div className="login__input-container">
            <input name="email" className="login__input login__input_type_email" type="email" required placeholder="Email" onChange={handleEmailPut} />
            <input name="password" className="login__input login__input_type_password" type="password" required placeholder="Пароль" onChange={handlePasswordPut} />
        </div>
        <button type="submit" className="login__submit-btn">Войти</button>
    </form>
    </section>
);
}

export default Login;