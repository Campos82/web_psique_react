import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuariosServices from "../services/UsuariosServices";
import "../styles/Login.css";
import background from "../images/login.png";
import LayoutLogin from "../containers/LayoutLogin";
import Content from "../components/Content";
import Swal from 'sweetalert2';
import PsicologosServices from "../services/PsicologoServices";
import PacientesServices from "../services/PacienteServices";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  function mostrarError(mensaje) {
    Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
  }

  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleContrasena = (event) => {
    setContrasena(event.target.value);
  };
  const handleSubmit = async () => {
    const data = await UsuariosServices.getLogin(correo,contrasena);
    if(data[0]===undefined)
    {
      mostrarError("Usuario y/o contrasena incorrecto");
    }else if(data[0].tipo==='PSI')
    {
      const data2 = await PsicologosServices.getPsicologo(data[0].idUsuario);
      console.log(data2);
      const infoUsuario = {
        idPsicologo : data2[0].idPsicologo,
      };

      const usuarioString = JSON.stringify(infoUsuario);
      sessionStorage.setItem('usuario',usuarioString);
      
      navigate(`/pacientes/${data2[0].idPsicologo}`);
    } else if(data[0].tipo==='PX')
    {
      const data3 = await PacientesServices.getPaciente(data[0].idUsuario);
      console.log(data3);
      navigate(`/pacientes-agenda/${data3[0].idPaciente}`);
    }
  };
  const Cancelar = () => {
    navigate("/");
  };
 
  return (
    <LayoutLogin>
      <Content>
        <center>
          <div>
            <div class="wrapper">
              
                <h1> Login</h1>
                <div class="input-box">
                  <input
                    type="text"
                    onChange={handleCorreo}
                    placeholder="Correo"
                    required
                  />
                </div>
                <div class="input-box">
                  <input
                    type="password"
                    onChange={handleContrasena}
                    placeholder="Contrasena"
                    required
                  />
                </div>
                <div class="remember-forgot">
                  <label>
                    <input type="checkbox" />
                  </label>
                  <label class="textoCaja"> Recordar contrasena </label>
                </div>
                <div class="olvidar">
                  <a href=" "> Olvidaste la contrasena?</a>
                </div>
                <p>
                  <button type="submit" class="btn" onClick={handleSubmit}>
                    {" "}
                    Ingresar{" "}
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <button type="submit" class="btn" onClick={Cancelar}>
                    {" "}
                    Salir{" "}
                  </button>
                </p>
                <div class="register-link">
                  <p class="textoCaja">
                    {" "}
                    No tengo una cuenta <a href="/pacientes-add">
                      {" "}
                      Registrar{" "}
                    </a>{" "}
                  </p>
                </div>
              
            </div>
          </div>
        </center>
      </Content>
    </LayoutLogin>
  );
};
export default Login;
