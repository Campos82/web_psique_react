import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import { useParams, useNavigate } from "react-router-dom";
import ExpedienteServices from "../../services/ExpedienteServices";
import axios from "axios";

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
  
  const navigate = useNavigate();

  const server = "http://localhost:4002";

  const getData = async () => {
    const { data } = await axios.get(`${server}/pacientes`);
    console.log(data);
    setPacientes(data);
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
  };

  return (
    <Content>
      <h1> EXPEDIENTE </h1>
      <center>
        <table class="wrapper">
          <tr>
            <td>
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
                    {paciente.nomPaciente} {paciente.ap1Paciente} {paciente.ap2Paciente}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Padecimientos:
                <input type="text" class="redondeado" onChange={handlePadecimientos} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Historia Clinica:
                <input type="text" class="redondeado" onChange={handleHistClinica} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Diagnostico:
                <input type="text" class="redondeado" onChange={handleDiagnostico} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Familiograma:
                <input type="text" class="redondeado" onChange={handleFamiliograma} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Seguimiento:
                <input type="text" class="redondeado" onChange={handleSeguimiento} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <button class="estiloBoton" onClick={handleSubmit}> Registrar </button>
            </td>
            <td>
              <button class="estiloBoton" onClick={Cancelar}> Cancelar </button>
            </td>
          </tr>
        </table>
      </center>
    </Content>
  );
};

export default ExpedientesAdd;
