import React, { useState } from "react";
import Content from "../../components/Content";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/Layout";

const PsicologosAdd = () => {
  const [nomPsicologo, setNomPsicologo] = useState("");
  const [ap1Psicologo, setAp1Psicologo] = useState("");
  const [ap2Psicologo, setAp2Psicologo] = useState("");
  const [edadPsicologo, setEdadPsicologo] = useState("");
  const [sexoPsicologo, setSexoPsicologo] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const navigate = useNavigate();

  const handleNomPsicologo = (event) => {
    setNomPsicologo(event.target.value);
  };
  const handleAp1Psicologo = (event) => {
    setAp1Psicologo(event.target.value);
  };
  const handleAp2Psicologo = (event) => {
    setAp2Psicologo(event.target.value);
  };
  const handleEdadPsicologo = (event) => {
    setEdadPsicologo(event.target.value);
  };
  const handleSexoPsicologo = (event) => {
    setSexoPsicologo(event.target.value);
  };
  const handleEspecialidad = (event) => {
    setEspecialidad(event.target.value);
  };
  const Cancelar = () => {
    navigate("/pacientes");
  };

  const handleSubmit = async () => {
    let psicologo = {
      nomPsicolgo: nomPsicologo,
      ap1Psicolgo: ap1Psicologo,
      ap2Psicolgo: ap2Psicologo,
      edadPsicolgo: edadPsicologo,
      sexoPsicolgo: sexoPsicologo,
      especialidad: especialidad,
    };

    try {
      const response = await axios.post(
        "http://localhost:4002/psicologos",
        psicologo
      );
      console.log(response.data);
      navigate("/psicologos");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <Layout>
      <Content>
        <h1>Ingresar psicólogo</h1>
        <div className="div-formulario">
          <div>
            <label class="textoCaja"> Psicólogo: </label>
            <input
              type="text"
              class="redondeado"
              name="nomPsicologo"
              onChange={handleNomPsicologo}
            />
          </div>
          <div>
            <label class="textoCaja"> Ap1: </label>
            <input
              type="text"
              class="redondeado"
              name="ap1Psicologo"
              onChange={handleAp1Psicologo}
            />
          </div>
          <div>
            <label class="textoCaja"> Ap2: </label>
            <input
              type="text"
              class="redondeado"
              name="ap2Psicologo"
              onChange={handleAp2Psicologo}
            />
          </div>
          <div>
            <label class="textoCaja"> Edad: </label>
            <input
              type="text"
              class="redondeado"
              name="edadPsicologo"
              onChange={handleEdadPsicologo}
            />
          </div>
          <div>
            <label class="textoCaja">Sexo:</label>
            <input
              type="text"
              class="redondeado"
              name="sexoPsicologo"
              onChange={handleSexoPsicologo}
            />
          </div>
          <div>
            <label class="textoCaja"> Especialidad: </label>
            <input
              type="text"
              class="redondeado"
              name="especialidad"
              onChange={handleEspecialidad}
            />
          </div>
          <div>
            <button class="estiloBoton" onClick={handleSubmit}>
              {" "}
              Ingresar{" "}
            </button>
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

export default PsicologosAdd;
