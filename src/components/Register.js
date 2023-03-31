import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Link, useNavigate } from 'react-router-dom';

function Register({ onRegistrationUser, isLoading }) {
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
    onRegistrationUser({ email, password });
  }

  function handleClickHeaderButton() {
    navigate("/signin", { replace: true });
  }

  return (
    <>
      <Header
        email=""
        valueLinkButton="Войти"
        onClickHeaderButton={handleClickHeaderButton}
      />

      <div className="register">
        <div className="register__container">
          <h2 className="register__title">Регистрация</h2>
          <form
            className="form-register register__form"
            name="form-register"
            onSubmit={handleSubmitForm}
          >
            <fieldset className="form-register__input-container">
              <input
                type="email"
                className="form-register__item form-register__item_el_name"
                id="email"
                name="email"
                placeholder="Email"
                required
                minLength="5"
                maxLength="100"
                onChange={handleChangeEmail} />
              <span id="name-error" className="error"></span>
              <input type="password"
                className="form-register__item form-register__item_el_activity"
                id="password"
                name="password"
                placeholder="Пароль"
                required
                minLength="5"
                maxLength="30"
                onChange={handleChangePassword} />
              <span id="activity-error" className="error"></span>
            </fieldset>
            <input type="submit" className="register__save-button"
              value={isLoading ? "Регистрация..." : "Зарегистрироваться"} />
          </form>
          <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link> </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register;
