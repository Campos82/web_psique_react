import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import Layout from "../../containers/Layout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AgendaServices from "../../services/AgendaServices";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Swal from 'sweetalert2';

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import PacienteServices from "../../services/PacienteServices";
import UsuariosServices from "../../services/UsuariosServices";


/* AQUI EL PSICOLOGO EDITA DATOS DE SUS PACIENTES RELACIONADOS  */

const PacientesPsicologoEditar = (id) => {
  const [paciente, setPaciente] = useState([]);
  const [idPaciente, setidPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");
  const [tipoPaciente, settipoPaciente] = useState("");
  const [correoPaciente, setcorreoPaciente] = useState("");
  const [contrasenaPaciente, setcontrasenaPaciente] = useState("");
  const [psicologo, setPsicologo] = useState("");
  const [idPsicologo, setidPsicologo] = useState("");
  const [psicologos, setPsicologos] = useState([]);

  const routeParams = useParams();
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
    console.log("-- id px --",routeParams.id);

    const { data } = await axios.get(`${server}/usuarios/${routeParams.id}`);
    console.log("-- usu --", data);
    setnomPaciente(data.nombre);
    setap1Paciente(data.ap1);
    setap2Paciente(data.ap2);
    setedadPaciente(data.edad);
    setsexoPaciente(data.sexo);
    settipoPaciente(data.tipo);
    setcorreoPaciente(data.correo);
    setcontrasenaPaciente(data.contrasena);
    
    const data2 = await axios.get(`${server}/psicologos?filter=` + JSON.stringify({
      "include": [
          {
              "relation": "psicologos_usuarios"
          }
      ]
  }));
    console.log("--getData psi--",data2.data);
    setPsicologos(data2.data);

    console.log("--id psi--",data2.data[0]);
    setidPsicologo(data2.data[0].psicologos_usuarios.idPsicologo);
    
  };

  useEffect(() => {
    getData();
  }, []);

  const handlenomPaciente = (event) => {
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
  const handletipoPaciente = (event) => {
    settipoPaciente(event.target.value);
  };
  const handlecorreoPaciente = (event) => {
    setcorreoPaciente(event.target.value);
  };
  const handlecontrasenaPaciente = (event) => {
    setcontrasenaPaciente(event.target.value);
  };
  const handlePsicologo = (event) => {
    setPsicologo(event.target.value);
  };
  const handlePsicologos = (event) => {
    setPsicologos(event.target.value);
  };

  const Cancelar = () => {
    navigate("/pacientes-psicologo");
  };

  const handleSubmit = () => {
    if(psicologo===""){
      mostrarError("Falta agregar psicologo");
    }else{
      let paciente = {
        nomPaciente: nomPaciente,
        ap1Paciente: ap1Paciente,
        ap2Paciente: ap2Paciente,
        edadPaciente: edadPaciente,
        sexoPaciente: sexoPaciente,
        tipoPaciente: tipoPaciente,
        correoPaciente: correoPaciente,
        contrasenaPaciente: contrasenaPaciente,
        idPsicologo: parseInt(psicologo),
      };
      console.log("-- datos px --",paciente);

      PacienteServices.updatePaciente(paciente, routeParams.id);
      navigate(`/pacientes-psicologo/${idPsicologo}`);
    }
  };

  return (
    <Layout>
      <Content>
        <h1>Programar agenda</h1>
        <div className="div-formulario">
          <div>
            <h2>Paciente: </h2>
            <h3> {nomPaciente + " " + ap1Paciente + " " + ap2Paciente} </h3>
          </div>
          <div>
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
                <option value={psicologo.idPsicologo}>
                  {psicologo.psicologos_usuarios.nombre} {psicologo.psicologos_usuarios.ap1}{" "}
                  {psicologo.psicologos_usuarios.ap2}
              </option>
              ))}
            </select>
          </div>
          <div>
            <label class="textoCaja"> Nombre </label>
            <input
              type="text"
              value={nomPaciente}
              class="redondeado"
              name="nombre"
              onChange={handlenomPaciente}
            />
          </div>
          <div>
            <label class="textoCaja"> Apellido Paterno </label>
            <input
              type="text"
              value={ap1Paciente}
              class="redondeado"
              name="ap1"
              onChange={handleap1Paciente}
            />
          </div>
          <div>
            <label class="textoCaja"> Apellido Materno </label>
            <input
              type="text"
              value={ap2Paciente}
              class="redondeado"
              name="ap2"
              onChange={handleap2Paciente}
            />
          </div>
          <div>
            <label class="textoCaja"> Edad </label>
            <input
              type="text"
              value={edadPaciente}
              class="redondeado"
              name="edad"
              onChange={handleedadPaciente}
            />
          </div>
          <div>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{
                fontWeight: "bold",
              }}
            >
              Sexo
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              onChange={handlesexoPaciente}
              name="radio-buttons-group"
              value={sexoPaciente}
            >
              <FormControlLabel
                value="M"
                className="lblRadio"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="F"
                className="lblRadio"
                control={<Radio />}
                label="Femenino"
              />
            </RadioGroup>
          </div>
          <div>
            <label class="textoCaja"> Tipo de usuario </label>
            <input
              type="text"
              value={tipoPaciente}
              class="redondeado"
              name="tipo"
              onChange={handletipoPaciente}
              disabled
            />
          </div>
          <div>
            <label class="textoCaja"> Correo </label>
            <input
              type="text"
              value={correoPaciente}
              class="redondeado"
              name="correo"
              onChange={handlecorreoPaciente}
            />
          </div>
          <div>
            <label class="textoCaja"> Contrasena </label>
            <input
              type="text"
              value={contrasenaPaciente}
              class="redondeado"
              name="contrasena"
              onChange={handlecontrasenaPaciente}
            />
          </div>
          <div>
            <p>
              <button class="estiloBoton" onClick={handleSubmit}>
                {" "}
                Editar{" "}
              </button>
              <button class="estiloBoton" onClick={Cancelar}>
                {" "}
                Cancelar{" "}
              </button>
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PacientesPsicologoEditar;
