import React from 'react';
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <header className="header root__header">
      <img className="logo" src={headerLogo} alt="Логотип" />
    </header>
  )
}

export default Header;