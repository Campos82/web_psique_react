import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import AgendaServices from "../../services/AgendaServices";
import axios from "axios";

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const AgendaAdd = () => {
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
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

  const handleComentario = (event) => {
    setComentario(event.target.value);
  };
  const handleFecha = (event) => {
    setFecha(event.target.value);
  };
  const handleHora = (event) => {
    setHora(event.target.value);
  };
  const handlePaciente = (event) => {
    setPaciente(event.target.value);
  };
  const Cancelar = () => {
    navigate("/agenda");
  };

  const handleSubmit = () => {
    let agenda = {
      comentario: comentario,
      fecha: fecha,
      hora: hora,
      idPaciente: parseInt(paciente),
    };
    console.log(agenda);
    AgendaServices.createAgenda(agenda);
    navigate("/agenda");
  };

  return (
    <Content>
      <h1>Programar agenda</h1>
      <center>
        <table class="wrapper">
          <tr>
            <td>
              <InputLabel id="paciente"> <h3> Paciente </h3></InputLabel>
              <select
                labelId="paciente"
                class="caja"
                id="paciente"
                name="paciente"
                onChange={handlePaciente}
              >
                <option disabled selected>
                  Selecciona un paciente
                </option>
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
              
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Comentario:
                <input type="text" class="redondeado" name="comentario" onChange={handleComentario} />
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
                Fecha:
                <input type="text" class="redondeado" name="fecha" onChange={handleFecha} />
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
                Hora:
                <input type="text" class="redondeado" name="hora" onChange={handleHora} />
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

export default AgendaAdd;
