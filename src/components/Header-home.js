import React from "react";
import "../styles/Header.css";

const Headerhome = () => {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li class="images">
            <img src="../images/logo.png" alt=""/>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/login"> Login </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headerhome;
