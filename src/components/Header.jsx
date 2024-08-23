import React from 'react';
import './../scss/Header.scss';
import logo from './../assets/images/Logo.svg';
import { NavLink, useLocation } from "react-router-dom";


export default function Header () {

  const location = useLocation("");

  return (
    <header>
      <div className="logo"> 
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <NavLink to="/"  className={location.pathname === "/accueil" ? "active" : ""}>
          Accueil
        </NavLink>
        <NavLink to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

