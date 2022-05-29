import React from "react";
import logo from '../images/header__logo.svg';
import { Link } from "react-router-dom";

function Header (props) {
    return (
      <header className="header">
        <img
          className="header__logo"
          alt="лого"
          src={logo}
        />
        <nav className="header__nav"> 
        <Link to={props.link} className="header__name">{props.headerName}</Link>
        </nav>
      </header>
    );
}

export default Header;