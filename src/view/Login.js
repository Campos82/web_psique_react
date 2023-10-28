import React, { useState } from "react";
import Content from "../components/Content";
import axios from "axios";

import {
  FormControl,
  FormLabel,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";

import { Grid } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  // variable handleLogin para capturar texto del campo
  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleContrasena = (event) => {
    setContrasena(event.target.value);
  };
  const handleSubmit = () => {
    let login = {
      correo: correo,
      contrasena: contrasena,
    };
  };

  return (
    <Content>
      <p> 
        <h1> LOGIN </h1> 
      </p>
      <p>
        <label>
          Correo:
          <input type="text" name="correo" onChange={handleCorreo} />   {/*handleCorreo obtiene el texto del campo */}
        </label>
      </p>
      <p>
        <label>
          Contrasena:
          <input type="text" name="contrasena" onChange={handleContrasena} />
        </label>
      </p>
      <p>
        <button onClick={handleSubmit}> 
          Entrar 
        </button>
        &nbsp;
        <button onClick={handleSubmit}> 
          Salir 
        </button>
      </p>
      
    </Content>
  );
};

export default Login;