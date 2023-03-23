import React from 'react';

function Footer() {
  return (
    <footer className="footer root__footer">
      <p className="footer__text">&copy;&nbsp;{(new Date()).getFullYear()} Mesto Russia</p>
    </footer>
  )
}

export default Footer;