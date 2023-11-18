import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import PacienteService from "../../services/PacienteServices";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/Layout";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import UsuariosServices from "../../services/UsuariosServices";

const PacientesAdd = (id) => {
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

  const navigate = useNavigate();
  const routeParams = useParams();

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
    setidPsicologo(routeParams.id);

    const data = await axios.get(`${server}/pacientes?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": routeParams.id
      },
      "include": [
        {
          "relation": "pacientes_usuarios"
        },
      ]
    }));
    console.log("-- px - user --",data.data);
    setPaciente(data.data);

    const data2 = await axios.get(`${server}/psicologos?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": routeParams.id
      },
      "include": [
        {
          "relation": "psicologos_usuarios"
        },
      ]
    }));
    console.log("-- psi - user --",data2.data[0]);
    setnomPsicologo(data2.data[0].psicologos_usuarios.nombre);
    setap1Psicologo(data2.data[0].psicologos_usuarios.ap1);
    setap2Psicologo(data2.data[0].psicologos_usuarios.ap2);
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
    navigate("/");
  };

  const handleSubmit = async () => {
    console.log("--handleSubmit psi--",psicologo);
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
      await UsuariosServices.createUsuario(usuario);
    } catch (error) {
      console.error("Error al registrar Paciente:", error);
    }
    const ultimoU = await UsuariosServices.getUltimoUsuario();
    console.log(idPsicologo)
    let paciente = {
      idPsicologo: parseInt(idPsicologo),
      idUsuario: parseInt(ultimoU.idUsuario)
    };
    try {
      await PacienteService.createPaciente(paciente);
    } catch (error) {
      console.error("Error al registrar Paciente:", error);
    }
    navigate(`/pacientes/${idPsicologo}`);
  };

  return (
    <Layout>
      <Content>
        <h1>AÑADIR PACIENTE</h1>
        <h3> Psicologo: {nomPsicologo} {ap1Psicologo} {ap2Psicologo}</h3>
        <div className="div-formulario">
          <div>

          </div>
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={handlePaciente}
            placeholder="Escribe tu nombre"
          />
          <label for="apellidoP">A. Paterno</label>
          <input
            type="text"
            name="apellidoP"
            id="apellidoP"
            onChange={handleap1Paciente}
            placeholder="1er Apellido"
          />
          <label for="apellidoM">A. Materno</label>
          <input
            type="text"
            name="apellidoM"
            id="apellidoM"
            onChange={handleap2Paciente}
            placeholder="2do Apellido"
          />
          <label for="edad">Edad</label>
          <input
            type="text"
            name="edad"
            id="edad"
            onChange={handleedadPaciente}
            placeholder="Edad"
          />
          <label for="correo">Correo</label>
          <input
            type="text"
            name="correo"
            id="correo"
            onChange={handleCorreo}
            placeholder="Correo"
          />
          <label for="contrasena">Contrasena</label>
          <input
            type="password"
            name="contrasena"
            id="contrasena"
            onChange={handleContrasena}
            placeholder="contrasena"
          />

          <FormLabel
            id="demo-row-radio-buttons-group-label"
            style={{
              fontWeight: "bold",
            }}
          >
            Sexo:
          </FormLabel>
          <p>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              onChange={handlesexoPaciente}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="M"
                className="lblRadio"
                control={
                  <Radio
                  />
                }
                label="Masculino"
              />
              <FormControlLabel
                value="F"
                className="lblRadio"
                control={
                  <Radio
                  />
                }
                label="Femenino"
              />
            </RadioGroup>
          </p>
          <div>
            <p>
              <button
                className="estiloBoton"
                name="registrar"
                value="Registrar"
                onClick={handleSubmit}
              > Registrar </button>
              <button
                className="estiloBoton"
                name="cancelar"
                value="Cancelar"
                onClick={Cancelar}
              > Cancelar </button>
            </p>
          </div>
        </div> 
      </Content>
    </Layout>
  );
};

export default PacientesAdd;
