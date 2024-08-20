import React from 'react';
import logo from './../assets/images/Logo.svg'
import './../scss/Footer.scss';



export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div className="f-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
}
