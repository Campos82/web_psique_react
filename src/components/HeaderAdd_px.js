import React from "react";
import "../styles/Header.css";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li>
          <img src={Logo} alt="logo" className="logo"/>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/"> Salir </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
