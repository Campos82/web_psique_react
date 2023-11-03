import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import PacienteService from "../../services/PacienteServices";

const PacientesEdit = (id) => {
  // const [idal, setIdal] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");
  // const actualUrl = window.location.href;
  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;
  //console.log(routeParams.id);

  const getData = async () => {
    const { data } = await axios.get(`${server}/pacientes/${routeParams.id}`);
    setnomPaciente(data.nomPaciente);
    setap1Paciente(data.ap1Paciente);
    setap2Paciente(data.ap2Paciente);
    setedadPaciente(data.edadPaciente);
    setsexoPaciente(data.sexoPaciente);
  };

  useEffect(() => {
    getData();
  }, []);
  
  const handlePaciente = (event) => {
    setnomPaciente(event.target.value);
  };
  const handleap1Paciente = (event) => {
    setap1Paciente(event.target.value);
  };
  const handleap2Paciente = (event) => {
    setap2Paciente(event.target.value);
  };
  const handleedadPaciente = (event) => {
    setedadPaciente(event.target.value);
  };
  const handlesexoPaciente = (event) => {
    setsexoPaciente(event.target.value);
  };
  const handleSubmit = () => {
    // const server = `http://localhost:4000`;
    let paciente = {
      nomPaciente: nomPaciente,
      ap1Paciente: ap1Paciente,
      ap2Paciente: ap2Paciente,
      edadPaciente: edadPaciente,
      sexoPaciente: sexoPaciente,
    };
    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    PacienteService.updatePaciente(paciente, routeParams.id);
    navigate("/pacientes");
    // console.log(data);
  };
  return (
    <Content>
      <h1>EDITAR PACIENTE</h1>
      <label>
        Paciente:
        <input
          type="text"
          name="nomPaciente"
          value={nomPaciente}
          onChange={handlePaciente}
        />
      </label>

      <label>
        Ap1:
        <input
          type="text"
          name="ap1Paciente"
          value={ap1Paciente}
          onChange={handleap1Paciente}
        />
      </label>

      <label>
        Ap2:
        <input
          type="text"
          name="ap2Paciente"
          value={ap2Paciente}
          onChange={handleap2Paciente}
        />
      </label>

      <label>
        Edad:
        <input
          type="text"
          name="edadPaciente"
          value={edadPaciente}
          onChange={handleedadPaciente}
        />
      </label>

      <label>
        Sexo:
        <input
          type="text"
          name="sexoPaciente"
          value={sexoPaciente}
          onChange={handlesexoPaciente}
        />
      </label>

      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};
export default PacientesEdit;