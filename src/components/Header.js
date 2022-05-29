import React from "react";
import logo from '../images/header__logo.svg';

function Header (props) {
    return (
      <header className="header">
        <img
          className="header__logo"
          alt="лого"
          src={logo}
        />
        <a href="#" className="header__name">{props.headerName}</a>
      </header>
    );
}

export default Header;