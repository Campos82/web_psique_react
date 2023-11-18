import React from "react";
import "../styles/Header.css";
  
const Headerhome = () => {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li>
            <a href="/login"> Login 
              <img src="/src/images/logo.png" alt=""/>
            </a>
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
