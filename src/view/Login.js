import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../styles/Login.css";
import background from "../images/login.png";
import LayoutLogin from "../containers/LayoutLogin";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleContrasena = (event) => {
    setContrasena(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.get(`http://[::1]:4002/logins`)
      .then(response => {
        /*const usuarios = response.data;       para guardar cualquier usuario*/
        /*const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);*/
        if (correo==='cmursal@iez.com') {
          navigate("/pacientes");
        } else {
          if (correo==='scampos@iez.com') {
            navigate("/psicologos");
          } else {
            if (correo==='lucero@gmail.com') {
              navigate("/calendario");
            } else {
              alert("Correo o contraseña inválida. Por favor, inténtelo de nuevo.");
            }
          }
        }})
        .catch(error => {
          console.error('Error al autenticar al usuario:', error);
          });
    }
    const Cancelar = () => {
      navigate("/");
    };
  
  return (
    <LayoutLogin>
        <center>
        <div style={{ backgroundImage: `url(${background})` }}>
          <div class="wrapper">
            <form action="">
              <h1> Login</h1>
              <div class="input-box">
                <input type="text" onChange={handleCorreo} placeholder="Correo" required/>
              </div>
              <div class="input-box">
                <input type="password" onChange={handleContrasena} placeholder="Contrasena" required/>
              </div>
              <div class="remember-forgot">
                <label>
                  <input type="checkbox"/>
                </label>
                <label class="textoCaja"> Recordar contrasena </label>
              </div>
              <div class="olvidar">
                <a href=" "> Olvidaste la contrasena?</a>
              </div>
              <p><button type="submit" class="btn" onClick={handleSubmit} > Ingresar </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button type="submit" class="btn" onClick={Cancelar} > Salir </button></p>
              <div class="register-link">
                <p class="textoCaja"> No tengo una cuenta <a href="/pacientes-add"> Registrar </a> </p>
              </div>
            </form>
          </div>
        </div>
      </center>
    </LayoutLogin>
    
  );
};
export default Login;