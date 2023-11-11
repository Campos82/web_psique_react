import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import PacienteService from "../../services/PacienteServices";
import PsicologoServices from "../../services/PsicologoServices";

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const PacientesEdit = (id) => {
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");
  const [psicologo, setPsicologo] = useState("");
  const [psicologos, setPsicologos] = useState([]);

  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  const getData = async () => {
    const { data } = await axios.get(`${server}/pacientes/${routeParams.id}`);
    setnomPaciente(data.nomPaciente);
    setap1Paciente(data.ap1Paciente);
    setap2Paciente(data.ap2Paciente);
    setedadPaciente(data.edadPaciente);
    setsexoPaciente(data.sexoPaciente);
    
    const data_p = await PsicologoServices.getPsicologos();
    console.log(data_p);
    setPsicologos(data_p);
    
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
  const handlePsicologo = (event) => {
    setPsicologo(event.target.value);
  };
  const handlePsicologos = (event) => {
    setPsicologos(event.target.value);
  };
  const Cancelar = () => {
    navigate("/pacientes");
  };

  const handleSubmit = () => {
    let paciente = {
      nomPaciente: nomPaciente,
      ap1Paciente: ap1Paciente,
      ap2Paciente: ap2Paciente,
      edadPaciente: edadPaciente,
      sexoPaciente: sexoPaciente,
      idPsicolgo: parseInt(psicologo),
    };

    PacienteService.updatePaciente(paciente, routeParams.id);
    navigate("/pacientes");
  };

  return (
    <Content>
      <h1>EDITAR PACIENTE</h1>
      <center>
        <table class="wrapper">
          <tr>
            <td>
                <InputLabel id="psicologo"><h3>Psicologo</h3></InputLabel>
                <select
                  labelId="psicologo"
                  id="psicologo"
                  name="psicologo"
                  onChange={handlePsicologo}
                >
                  <option disabled selected>
                    Selecciona un psicologo
                  </option>
                  {psicologos.map((psicologo) => (
                    <option value={psicologo.idPsicolgo}>
                      {psicologo.nomPsicolgo} {psicologo.ap1Psicolgo} {psicologo.ap2Psicolgo}
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
                  Paciente:
                  <input
                    type="text"
                    class="redondeado"
                    name="nomPaciente"
                    value={nomPaciente}
                    onChange={handlePaciente}
                  />
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
                  Ap1:
                  <input
                    type="text"
                    class="redondeado"
                    name="ap1Paciente"
                    value={ap1Paciente}
                    onChange={handleap1Paciente}
                  />
                </label>
            </td>
            <td>
                <label class="textoCaja">
                  Ap2:
                  <input
                    type="text"
                    class="redondeado"
                    name="ap2Paciente"
                    value={ap2Paciente}
                    onChange={handleap2Paciente}
                  />
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
                Edad:
                <input
                  type="text"
                  class="redondeado"
                  name="edadPaciente"
                  value={edadPaciente}
                  onChange={handleedadPaciente}
                />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Sexo:
                <input
                  type="text"
                  class="redondeado"
                  name="sexoPaciente"
                  value={sexoPaciente}
                  onChange={handlesexoPaciente}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <button class="estiloBoton" onClick={handleSubmit}>Actualizar</button>
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
export default PacientesEdit;