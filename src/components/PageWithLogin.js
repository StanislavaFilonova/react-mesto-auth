import React from "react";
import { Link } from "react-router-dom";
function PageWithLogin(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(email, password);
    }

    return (
        <div className="auth">
            <h2 className="auth__welcome-title">{props.title}</h2>
            <form
                onSubmit={handleSubmit}
                name={`${props.name}`}
                className="auth__form"
            >
                <label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email || ""}
                        className="auth__input"
                        placeholder="Email"
                        required
                        minLength="2"
                        maxLength="30"
                        onChange={handleEmailChange}
                    />
                </label>
                <span
                    id="email-input-error"
                    className="popup__input-error"
                ></span>
                <label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="auth__input"
                        placeholder="Введите пароль"
                        value={password || ""}
                        required
                        minLength="6"
                        maxLength="20"
                        onChange={handlePasswordChange}
                    />
                </label>
                <span id="password-input-error" className="popup__input-error popup__input-error_active"></span>
                <button
                    type="submit"
                    className="auth__button">
                    {props.buttonText}
                    </button>
            </form>
            <div className="auth__signin">
                <p className="auth__text">Уже зарегистрированы?</p>
                <Link to={"/sign-in"} className="auth__login-links">Войти</Link>
            </div>
        </div>
    );
}

export default PageWithLogin;
