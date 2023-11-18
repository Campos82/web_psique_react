import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      {/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
      <div className="navbar-left">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pacientes">Pacientes</a>
          </li>
          <li>
            <a href="/agenda">Citas</a>
          </li>
          <li>
            <a href="/expedientes">Expedientes</a>
          </li>
          <li>
            <a href="/psicologos-edit">Perfil</a>
          </li>
          <li>
            <a href="/calendario">Calendario</a>
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
