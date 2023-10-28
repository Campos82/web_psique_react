import React from "react";
import "../styles/Header.css";


const Headerpsicologo = () => {
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
            <a href="/psico-pendientes">Pendientes</a>
          </li>
          <li>
            <a href="/psico-histCli">Historia Clinica</a>
          </li>
          <li>
            <a href="/psico-seguimiento">Seguimiento</a>
          </li>
          <li>
            <a href="/expedientes">Expediente</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headerpsicologo;
