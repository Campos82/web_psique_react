import React, { useState } from "react";
import Content from "../../components/Content";
import PsicologoServices from "../../services/PsicologoServices";

const PsicologosAdd = () => {
  const [nomPsicologo, setnomPsicologo] = useState("");
  const [ap1Psicologo, setap1Psicologo] = useState("");
  const [ap2Psicologo, setap2Psicologo] = useState("");
  const [edadPsicologo, setedadPsicologo] = useState("");
  const [sexoPsicologo, setsexoPsicologo] = useState("");
  const [especialidad, setEspecialidad] = useState("");

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
    let psicologo = {
      nomPsicologo: nomPsicologo,
      ap1Psicologo: ap1Psicologo,
      ap2Psicologo: ap2Psicologo,
      edadPsicologo: edadPsicologo,
      sexoPsicologo: sexoPsicologo,
      especialidad: especialidad
    };
    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    console.log(psicologo);
    PsicologoServices.createPsicologo(psicologo);
  };
  
  return (
    <Content>
      <h1>CAPTURA DE PSICLOGO</h1>
      <label>
        Psicolgo:
        <input type="text" name="nomPsicologo" onChange={handlePsicologo} />
      </label>
      &nbsp; &nbsp;
      <label>
        Ap1:
        <input type="text" name="ap1Psicologo" onChange={handleap1Psicologo} />
      </label>
      &nbsp; &nbsp;
      <label>
        Ap2:
        <input type="text" name="ap2Psicologo" onChange={handleap2Psicologo} />
      </label>
      &nbsp; &nbsp;
      <label>
        Edad:
        <input type="text" name="edadPsicologo" onChange={handleedadPsicologo} />
      </label>
      &nbsp; &nbsp;
      <label>
        Sexo:
        <input type="text" name="sexoPsicologo" onChange={handlesexoPsicologo} />
      </label>
      &nbsp; &nbsp;
      <label>
        Especialidad:
        <input type="text" name="especialidad" onChange={handleEspecialidad} />
      </label>
      &nbsp; &nbsp; &nbsp;
      <button onClick={handleSubmit}> Ingresar </button>
    </Content>
  );
};

export default PsicologosAdd;
