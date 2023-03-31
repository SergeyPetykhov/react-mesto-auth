import React from 'react';
import headerLogo from "../images/header_logo.svg";

function Header({email, valueLinkButton, onClickHeaderButton}) {
  
  return (
    <header className="header root__header">
      <div className="header__logo-container">
        <img className="logo" src={headerLogo} alt="Логотип" />
      </div>
      <div className="header__info-container">
        <p className="header__user-email">{email}</p>
        <button type="button" className="header__login-out-button" onClick={onClickHeaderButton}>{valueLinkButton}</button>
      </div>
    </header>
  )
}

export default Header;