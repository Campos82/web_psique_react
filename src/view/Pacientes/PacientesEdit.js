import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import PacienteService from "../../services/PacienteServices";
import PsicologoServices from "../../services/PsicologoServices";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Swal from "sweetalert2";
import Layout from "../../containers/Layout";
import UsuariosServices from "../../services/UsuariosServices";

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
  const [idUsuario, setidUsuario] = useState("");
  const [idPaciente, setidPaciente] = useState("");
  const [paciente, setPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [edadPaciente, setedadPaciente] = useState("");
  const [sexoPaciente, setsexoPaciente] = useState("");
  const [psicologo, setPsicologo] = useState("");
  const [psicologos, setPsicologos] = useState([]);
  const [idPsicologo, setidPsicologo] = useState("");
  const [nomPsicologo, setnomPsicologo] = useState("");
  const [ap1Psicologo, setap1Psicologo] = useState("");
  const [ap2Psicologo, setap2Psicologo] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  function mostrarError(mensaje) {
    Swal.fire({
      title: "¡Error!",
      text: mensaje,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  const getData = async () => {
    setidPaciente(routeParams.id);
    const data = await axios.get(
      `${server}/pacientes?filter=` +
        JSON.stringify({
          where: {
            idPaciente: routeParams.id,
          },
          include: [
            {
              relation: "pacientes_usuarios",
            },
          ],
        })
    );
    console.log("-- px - user --", data.data);
    setPaciente(data.data[0]);
    setContrasena(data.data[0].pacientes_usuarios.contrasena);
    setidUsuario(data.data[0].idUsuario);
    setnomPaciente(data.data[0].pacientes_usuarios.nombre);
    setap1Paciente(data.data[0].pacientes_usuarios.ap1);
    setap2Paciente(data.data[0].pacientes_usuarios.ap2);
    setedadPaciente(data.data[0].pacientes_usuarios.edad);
    setsexoPaciente(data.data[0].pacientes_usuarios.sexo);
    setCorreo(data.data[0].pacientes_usuarios.correo);
    setidPsicologo(data.data[0].idPsicologo);

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
  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleContrasena = (event) => {
    setContrasena(event.target.value);
  };
  const handlePsicologo = (event) => {
    setPsicologo(event.target.value);
  };
  const handlePsicologos = (event) => {
    setPsicologos(event.target.value);
  };

  const Cancelar = () => {
    navigate(`/pacientes/${idPsicologo}`);
  };

  const handleSubmit = async () => {
    let usuario = {
      nombre: nomPaciente,
      ap1: ap1Paciente,
      ap2: ap2Paciente,
      edad: edadPaciente,
      sexo: sexoPaciente,
      tipo: "PX",
      correo: correo,
      contrasena: contrasena,
    };
    console.log(usuario);

    try {
      await UsuariosServices.updateUsuario(usuario,idUsuario);
    } catch (error) {
      console.error("Error al registrar Paciente:", error);
    }
    console.log(idPsicologo);
    navigate(`/pacientes/${idPsicologo}`);
  };

  return (
    <Layout>
      <Content>
        <h1>EDITAR PACIENTE</h1>
        <div className="div-formulario">
          <div>
            <label class="textoCaja"> Paciente: </label>
            <input
              type="text"
              class="redondeado"
              name="nomPaciente"
              value={nomPaciente}
              onChange={handlePaciente}
            />
          </div>
          <div>
            <label class="textoCaja">Ap1:</label>
            <input
              type="text"
              class="redondeado"
              name="ap1Paciente"
              value={ap1Paciente}
              onChange={handleap1Paciente}
            />
          </div>
          <div>
            <label class="textoCaja">Ap2:</label>
            <input
              type="text"
              class="redondeado"
              name="ap2Paciente"
              value={ap2Paciente}
              onChange={handleap2Paciente}
            />
          </div>
          <div>
            <label class="textoCaja">Edad:</label>
            <input
              type="text"
              class="redondeado"
              name="edadPaciente"
              value={edadPaciente}
              onChange={handleedadPaciente}
            />
          </div>
          <label for="correo">Correo</label>
          <input
            type="text"
            name="correo"
            id="correo"
            value={correo}
            onChange={handleCorreo}
            placeholder="Correo"
          />
          <div>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{
                fontWeight: "bold",
              }}
            >
              Sexo:
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
            <button class="estiloBoton" onClick={handleSubmit}>
              Actualizar
            </button>
          </div>
          <div>
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
export default PacientesEdit;
