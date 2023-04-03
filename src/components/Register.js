import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationForm from './AuthenticationForm.js';

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

      <AuthenticationForm
        name="register"
        title="Регистрация"
        email={email}
        password={password}
        handleSubmitForm={handleSubmitForm}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        valueSubmitButton={isLoading ? "Регистрация..." : "Зарегистрироваться"}
      >
        <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link> </p>
      </AuthenticationForm >

      <Footer />
    </>
  )
}

export default Register;
