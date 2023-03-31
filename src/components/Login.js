import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

function Login({ onAuthorizationUser, isLoading }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onAuthorizationUser({ email, password });
  }

  function handleClickHeaderButton() {
    return navigate("/signup", { replace: true });
  }

  return (
    <>
      <Header
        email=""
        valueLinkButton="Регистрация"
        onClickHeaderButton={handleClickHeaderButton}
      />

      <div className="login">
        <div className="login__container">
          <h2 className="login__title">Вход</h2>
          <form
            className="form-login login__form"
            name="form-login"
            onSubmit={handleSubmitForm}
          >
            <fieldset className="form-login__input-container">
              <input
                type="email"
                className="form-login__item form-login__item_el_name"
                id="email"
                name="email"
                placeholder="Email"
                required
                minLength="5"
                maxLength="100"
                onChange={handleChangeEmail} />
              <span id="name-error" className="error"></span>
              <input type="password"
                className="form-login__item login-register__item_el_activity"
                id="password"
                name="password"
                placeholder="Пароль"
                required
                minLength="5"
                maxLength="30"
                onChange={handleChangePassword} />
              <span id="activity-error" className="error"></span>
            </fieldset>
            <input type="submit" className="login__save-button"
              value={isLoading ? "Вход..." : "Войти"} />
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login;