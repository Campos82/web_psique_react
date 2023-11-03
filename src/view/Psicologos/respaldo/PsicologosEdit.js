import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import PsicologoServices from "../../services/PsicologoServices";

const PsicologosEdit=(id)=>{
  const [nomPsicologo, setnomPsicologo] = useState("");
  const [ap1Psicologo, setap1Psicologo] = useState("");
  const [ap2Psicologo, setap2Psicologo] = useState("");
  const [edadPsicologo, setedadPsicologo] = useState("");
  const [sexoPsicologo, setsexoPsicologo] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const routeParams=useParams();
  const navigate=useNavigate();
  const server=`http://localhost:4002`;

  const getData=async()=>{
    const {data}=await axios.get(`${server}/psicologos/${routeParams.id}`);
    setnomPsicologo(data.nomPsicologo);
    setap1Psicologo(data.ap1Psicologo);
    setap2Psicologo(data.ap2Psicologo);
    setedadPsicologo(data.edadPsicologo);
    setsexoPsicologo(data.sexoPsicologo);
    setEspecialidad(data.especialidad);
  }
  
  useEffect(()=>{
    getData();
  }, []
  );

  const handlePsicologo = (event) => {
    setnomPsicologo(event.target.value);
  };
  const handleap1Psicologo = (event) => {
    setap1Psicologo(event.target.value);
  };
  const handleap2Psicologo = (event) => {
    setap2Psicologo(event.target.value);
  };
  const handleedadPsicologo = (event) => {
    setedadPsicologo(event.target.value);
  };
  const handlesexoPsicologo = (event) => {
    setsexoPsicologo(event.target.value);
  };
  const handleEspecialidad = (event) => {
    setEspecialidad(event.target.value);
  };
  const handleSubmit = () => {
    // const server = `http://localhost:4000`;
    let psicologo = {
      nomPsicologo: nomPsicologo,
      ap1Psicologo: ap1Psicologo,
      ap2Psicologo: ap2Psicologo,
      edadPsicologo: edadPsicologo,
      sexoPsicologo: sexoPsicologo,
      especialidad: especialidad,
    };
    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    PsicologoServices.updatePaciente(psicologo, routeParams.id);
    navigate("/psicologos");
    // console.log(data);
  };

  return (
    <Content>
      <h1>EDITAR PSICOLOGO</h1>
      <label>
        Psicolgo:
        <input
          type="text"
          name="nomPsicologo"
          value={nomPsicologo}
          onChange={handlePsicologo}
        />
      </label>

      <label>
        Ap1:
        <input
          type="text"
          name="ap1Psicologo"
          value={ap1Psicologo}
          onChange={handleap1Psicologo}
        />
      </label>

      <label>
        Ap2:
        <input
          type="text"
          name="ap2Psicologo"
          value={ap2Psicologo}
          onChange={handleap2Psicologo}
        />
      </label>

      <label>
        Edad:
        <input
          type="text"
          name="edadPsicologo"
          value={edadPsicologo}
          onChange={handleedadPsicologo}
        />
      </label>

      <label>
        Sexo:
        <input
          type="text"
          name="sexoPsicologo"
          value={sexoPsicologo}
          onChange={handlesexoPsicologo}
        />
      </label>

      <label>
        Sexo:
        <input
          type="text"
          name="sexoPsicolgo"
          value={sexoPsicologo}
          onChange={handlesexoPsicologo}
        />
      </label>

      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};

export default PsicologosEdit;