import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import ExpedienteServices from "../../services/ExpedienteServices";


const ExpedienteEdit = (id) => {
  const [padecimientos, setPadecimientos] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [histClinica, setHistClinica] = useState("");
  const [familiograma, setFamiliograma] = useState("");
  const [seguimiento, setSeguimiento] = useState("");
  
  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  const getData = async () => {
    const { data } = await axios.get(`${server}/expedientes/${routeParams.id}`);
    setPadecimientos(data.padecimientos);
    setDiagnostico(data.diagnostico);
    setHistClinica(data.histClinica);
    setFamiliograma(data.familiograma);
    setSeguimiento(data.seguimiento);
  };

  useEffect(() => {
    getData();
  }, []);
  
  const handlePadecimientos = (event) => {
    setPadecimientos(event.target.value);
  };
  const handleDiagnostico = (event) => {
    setDiagnostico(event.target.value);
  };
  const handleHistClinica = (event) => {
    setHistClinica(event.target.value);
  };
  const handleFamiliograma = (event) => {
    setFamiliograma(event.target.value);
  };
  const handleSeguimiento = (event) => {
    setSeguimiento(event.target.value);
  };
  
  const handleSubmit = () => {
    let expediente = {
      padecimientos: padecimientos,
      diagnostico: diagnostico,
      histClinica: histClinica,
      familiograma: familiograma,
      seguimiento: seguimiento,
    };
    ExpedienteServices.updateExpediente(expediente, routeParams.id);
    navigate("/expedientes");
  };

  return (
    <Content>
      <h1>EDITAR PACIENTE</h1>
      <label>
        Padecimientos:
        <input
          type="text"
          name="padecimientos"
          value={padecimientos}
          onChange={handlePadecimientos}
        />
      </label>
      <label>
        Diagnostico:
        <input
          type="text"
          name="diagnostico"
          value={diagnostico}
          onChange={handleDiagnostico}
        />
      </label>
      <label>
        Historia Clínica:
        <input
          type="text"
          name="histClinica"
          value={histClinica}
          onChange={handleHistClinica}
        />
      </label>
      <label>
        Familiograma:
        <input
          type="text"
          name="familiograma"
          value={familiograma}
          onChange={handleFamiliograma}
        />
      </label>
      <label>
        Seguimiento:
        <input
          type="text"
          name="seguimiento"
          value={seguimiento}
          onChange={handleSeguimiento}
        />
      </label>
      
      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};
export default ExpedienteEdit;