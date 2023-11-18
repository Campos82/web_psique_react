import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import { useParams, useNavigate } from "react-router-dom";
import ExpedienteServices from "../../services/ExpedienteServices";
import axios from "axios";
import "../../styles/formularios.css";
import Layout from "../../containers/Layout";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Swal from 'sweetalert2';

// Librerias GRID
import Grid from "@mui/material/Grid";

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const ExpedientesAdd = () => {
  const [padecimientos, setPadecimientos] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [histClinica, setHistClinica] = useState("");
  const [familiograma, setFamiliograma] = useState("");
  const [seguimiento, setSeguimiento] = useState("");
  const [paciente, setPaciente] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const usuarioString = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(usuarioString);
  
  const navigate = useNavigate();

  const server = "http://localhost:4002";

  function mostrarError(mensaje) {
    Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
  }

  const getData = async () => {
    const data = await axios.get(`${server}/pacientes?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": usuario.idPsicologo
      },
      "include": [
        {
          "relation": "pacientes_usuarios"
        },
      ]
    }));
    console.log(data.data);
    setPacientes(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePadecimientos = (event) => {
    setPadecimientos(event.target.value);
  };
  const handleDiagnostico = (event) => {
    setDiagnostico(event.target.value);
  };
  const handleHistClinica = (event) => {
    setHistClinica(event.target.value);
  };
  const handleFamiliograma = (event) => {
    setFamiliograma(event.target.value);
  };
  const handleSeguimiento = (event) => {
    setSeguimiento(event.target.value);
  };
  const handlePaciente = (event) => {
    setPaciente(event.target.value);
  };
  const Cancelar = () => {
    navigate("/expedientes");
  };

  const handleSubmit = (event) => {
    
    console.log(paciente);
    if(paciente===""){
      mostrarError("Falta agregar paciente");
    }
    else{
      const expediente = {
        padecimientos: padecimientos,
        diagnostico: diagnostico,
        histClinica: histClinica,
        familiograma: familiograma,
        seguimiento: seguimiento,
        idPaciente: parseInt(paciente),
      };
  
      console.log(expediente);
      ExpedienteServices.createExpediente(expediente);
      navigate("/expedientes");
    }
  };

  return (
    <Layout>
      <Content>
        <h1> Crear expediente </h1>
        <div className="formExpediente">
          <div>
          <InputLabel id="paciente">Paciente</InputLabel>
                <select
                  labelId="paciente"
                  id="paciente"
                  name="paciente"
                  onChange={handlePaciente}
                >
                  <option disabled selected>Selecciona un paciente</option>
                  {pacientes.map((paciente) => (
                    <option value={paciente.idPaciente}>
                      {paciente.pacientes_usuarios.nombre} {paciente.pacientes_usuarios.ap1} {paciente.pacientes_usuarios.ap2}
                    </option>
                  ))}
                </select>
          </div>
          <div>
            <label for="padecimientos">Padecimientos</label>
            <textarea name="padecimientos" for="padecimientos" onChange={handlePadecimientos} placeholder="Padecimientos" maxlength="300"></textarea>
          </div>
          <div>
            <label for="histCli">Historia Clinica</label>
            <textarea name="histCli" for="histCli" onChange={handleHistClinica} placeholder="Historia clinica" maxlength="300"></textarea>
          </div>
          <div>
            <label for="diagnostico">Diagnostico</label>
            <textarea name="diagnostico" for="diagnostico" onChange={handleDiagnostico} placeholder="Diagnostico" maxlength="300"></textarea>
          </div>
          <div>
            <label for="familiograma">Familiograma</label>
            <textarea name="familiograma" for="familiograma" onChange={handleFamiliograma} placeholder="Familiograma" maxlength="300"></textarea>
          </div>
          <div>
            <label for="seguimiento">Seguimiento</label>
            <textarea name="seguimiento" for="seguimiento" onChange={handleSeguimiento} placeholder="Seguimiento" maxlength="300"></textarea>
          </div>
          <div>
            <button className="estiloBoton" name="guardar" value="Guardar" onClick={handleSubmit}> Guardar </button>
            <button className="estiloBoton" name="cancelar" value="Cancelar" onClick={Cancelar}> Cancelar</button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ExpedientesAdd;
