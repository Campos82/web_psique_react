import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import UsuariosServices from "../../services/UsuariosServices";
import PsicologoServices from "../../services/PsicologoServices";

const PsicologoEdit = () => {
  const [idPsicologo, setidPsicologo] = useState("")
  const usuarioString = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(usuarioString);
  const [nomPsicologo, setNomPsicologo] = useState("");
  const [ap1Psicologo, setAp1Psicologo] = useState("");
  const [ap2Psicologo, setAp2Psicologo] = useState("");
  const [edadPsicologo, setEdadPsicologo] = useState("");
  const [sexoPsicologo, setSexoPsicologo] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [idUsuario, setidUsuario] = useState("");
  

  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get(`http://localhost:4002/psicologos?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": usuario.idPsicologo
      },
      "include": [{
        "relation": "psicologos_usuarios"
      }]
    }));
    const data = response.data;
    setNomPsicologo(data.psicologos_usuarios.nombre);  {/* nomPsicolgo, aqui recibe los datos desde el loopback */}
    setAp1Psicologo(data.psicologos_usuarios.ap1);
    setAp2Psicologo(data.psicologos_usuarios.ap2);
    setEdadPsicologo(data.psicologos_usuarios.edad);
    setSexoPsicologo(data.psicologos_usuarios.sexo);
    setCorreo(data.psicologos_usuarios.correo);
    setContrasena(data.psicologos_usuarios.contrasena);
    setidUsuario(data.idUsuario);
    setEspecialidad(data.especialidad);

};
useEffect(() => {
  getData();
}, []);

  const handleNomPsicolgo = (event) => {
    setNomPsicologo(event.target.value);
  };

  const handleAp1Psicolgo = (event) => {
    setAp1Psicologo(event.target.value);
  };

  const handleAp2Psicolgo = (event) => {
    setAp2Psicologo(event.target.value);
  };

  const handleEdadPsicolgo = (event) => {
    setEdadPsicologo(event.target.value);
  };

  const handleSexoPsicolgo = (event) => {
    setSexoPsicologo(event.target.value);
  };

  const handleEspecialidad = (event) => {
    setEspecialidad(event.target.value);
  };
  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const Cancelar = () => {
    navigate("/psicologos");
  };

  const handleSubmit = async () => {
    let usuario2 = {
      nombre: nomPsicologo,
      ap1: ap1Psicologo,
      ap2: ap2Psicologo,
      edad: edadPsicologo,
      sexo: sexoPsicologo,
      tipo: "PSI",
      correo: correo,
      contrasena: contrasena,
    };
    console.log(usuario);

    try {
      await UsuariosServices.updateUsuario(usuario2,idUsuario);
    } catch (error) {
      console.error("Error al registrar Paciente:", error);
    }
    let psicologo={
      idUsuario:parseInt(idUsuario),
      especialidad:especialidad
    }
    try {
      await PsicologoServices.updatePsicologo(psicologo, usuario.idPsicologo);
    } catch (error) {
      console.error("Error al registrar Paciente:", error);
    }
    console.log(idPsicologo);
    navigate(`/pacientes/${idPsicologo}`);
  };

  /* value=() recibe el dato que va a presentar en campo de texto */
  return (
    <Content>
      <h1>EDITAR PSICOLOGO</h1>
      <div className="div-formulario">
        <div>
          <label class="textoCaja"> Nombre: </label>
          <input type="text" class="redondeado" value={nomPsicologo} onChange={handleNomPsicolgo} />     
        </div>
        <div>
          <label class="textoCaja"> Ap1: </label>
          <input type="text" class="redondeado" value={ap1Psicologo} onChange={handleAp1Psicolgo} />
        </div>
        <div>
          <label class="textoCaja"> Ap2: </label>
          <input type="text" class="redondeado" value={ap2Psicologo} onChange={handleAp2Psicolgo} />
        </div>
        <div>
          <label class="textoCaja"> Edad: </label>
          <input type="text" class="redondeado" value={edadPsicologo} onChange={handleEdadPsicolgo} />
        </div>
        <div>
          <label class="textoCaja"> Sexo: </label>
          <input type="text" class="redondeado" value={sexoPsicologo} onChange={handleSexoPsicolgo} />
        </div>
        <div>
          <label class="textoCaja"> Especialidad: </label>
          <input type="text" class="redondeado" value={especialidad} onChange={handleEspecialidad} />    
        </div>
        <div>
          <label for="correo">Correo</label>
          <input
            type="text"
            name="correo"
            id="correo"
            value={correo}
            onChange={handleCorreo}
            placeholder="Correo"
          />
        </div>
        <div>
          <button class="estiloBoton" onClick={handleSubmit}>Actualizar</button>
          <button class="estiloBoton" onClick={Cancelar}> Cancelar </button>
        </div>
      </div>
    </Content>
  );
};

export default PsicologoEdit;