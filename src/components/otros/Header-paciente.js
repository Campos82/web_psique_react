import React from "react";
import "../styles/Header.css";


const Headerpaciente = () => {
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
            <a href="/registrar-cita">Registrar cita</a>
          </li>
          <li>
            <a href="/modificar-cita">Modificar cita</a>
          </li>
          <li>
            <a href="/cancelar-cita">Cancelar cita</a>
          </li>
          <li>
            <a href="/expedientes">Expediente</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headerpaciente;
