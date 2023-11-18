import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import AgendaServices from "../../services/AgendaServices";
import axios from "axios";
import { useParams } from "react-router-dom";
import LayoutAdd_px from "../../containers/LayoutAdd_px";

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const AgendaPacientes = (id) => {
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [paciente, setPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");

  const navigate = useNavigate();
  const routeParams = useParams();

  const server = "http://localhost:4002";

  const getData = async () => {
    const { data } = await axios.get(`${server}/usuarios/${routeParams.id}`);
    setnomPaciente(data.nombre);
    setap1Paciente(data.ap1);
    setap2Paciente(data.ap2);
    console.log("-- datos user --",data);
    setPaciente(routeParams.id);
    console.log("-- id user --",routeParams.id);
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
    console.log("-- agenda --",agenda);
    AgendaServices.createAgenda(agenda);
    navigate(`/pacientes-agenda/${routeParams.id}`);
  };

  console.log("-- nom px --",nomPaciente);
  return (
    <LayoutAdd_px>
      <Content>
        <h1>Programar citas</h1>
        <h2> {nomPaciente + " " + ap1Paciente + " " + ap2Paciente} </h2>
        <div className="div-formulario">
          <div>
            <label class="textoCaja"> Comentario: </label>
            <input
              type="text"
              class="redondeado"
              name="comentario"
              onChange={handleComentario}
            />
          </div>
          <div>
            <label class="textoCaja"> Fecha: </label>
            <input
              type="text"
              class="redondeado"
              name="fecha"
              onChange={handleFecha}
            />
          </div>
          <div>
            <label class="textoCaja"> Hora: </label>
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
    </LayoutAdd_px>
  );
};

export default AgendaPacientes;
