import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import AgendaServices from "../../services/AgendaServices";
import axios from "axios";
import Layout from "../../containers/Layout";

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
  const usuarioString = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(usuarioString);
 
  const navigate = useNavigate();

  const server = "http://localhost:4002";

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
    <Layout>
      <Content>
        <h1>Programar cita</h1>
        <div className="div-formulario">
          <div>
            <InputLabel id="paciente">
              {" "}
              <h3> Paciente </h3>
            </InputLabel>
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
                  {paciente.pacientes_usuarios.nombre} {paciente.pacientes_usuarios.ap1}{" "}
                  {paciente.pacientes_usuarios.ap2}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label> Comentario: </label>
            <textarea
              name="comentario"
              for="comentario"
              onChange={handleComentario}
              placeholder="Anade un comentario..."
              maxlength="300"
            ></textarea>
          </div>
          <div>
            <label> Fecha: </label>
            <input
              type="text"
              class="redondeado"
              name="fecha"
              onChange={handleFecha}
            />
          </div>
          <div>
            <label> Hora: </label>
            <input
              type="text"
              class="redondeado"
              name="hora"
              onChange={handleHora}
            />
          </div>
          <div>
            <button class="estiloBoton" onClick={handleSubmit}>
              {" "}
              Registrar{" "}
            </button>
            <button class="estiloBoton" onClick={Cancelar}>
              {" "}
              Cancelar{" "}
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AgendaAdd;
