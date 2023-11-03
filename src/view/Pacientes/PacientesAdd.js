import React, { useState } from "react";
import Content from "../../components/Content";
import PacienteService from "../../services/PacienteServices";

const PacientesAdd = () => {
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");

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
    let paciente = {
      nomPaciente: nomPaciente,
      ap1Paciente: ap1Paciente,
      ap2Paciente: ap2Paciente,
      edadPaciente: edadPaciente,
      sexoPaciente: sexoPaciente
    };
    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    console.log(paciente);
    PacienteService.createPaciente(paciente);
  };
  return (
    <Content>
      <h1>CAPTURA DE PACIENTES</h1>
      <label>
        Paciente:
        <input type="text" name="nomPaciente" onChange={handlePaciente} />
      </label>
      &nbsp; &nbsp;
      <label>
        Ap1:
        <input type="text" name="ap1Paciente" onChange={handleap1Paciente} />
      </label>
      &nbsp; &nbsp;
      <label>
        Ap2:
        <input type="text" name="ap2Paciente" onChange={handleap2Paciente} />
      </label>
      &nbsp; &nbsp;
      <label>
        Edad:
        <input type="text" name="edadPaciente" onChange={handleedadPaciente} />
      </label>
      &nbsp; &nbsp;
      <label>
        Sexo:
        <input type="text" name="sexoPaciente" onChange={handlesexoPaciente} />
      </label>
      &nbsp; &nbsp; &nbsp;
      <button onClick={handleSubmit}> Registrar </button>
    </Content>
  );
};

export default PacientesAdd;
