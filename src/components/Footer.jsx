import React from 'react';
import './../scss/Footer.scss';
import logoFooter from './../assets/images/logo-footer.png'


export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='f-logo'>
        <img src={logoFooter} alt="Logo" />
      </div>
      <div className="f-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
}
