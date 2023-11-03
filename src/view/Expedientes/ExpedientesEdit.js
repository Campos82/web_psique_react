import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";

const ExpedienteEdit = () => {
  const { id } = useParams();
  const [padecimientos, setPadecimientos] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [histClinica, setHistClinica] = useState("");
  const [familiograma, setFamiliograma] = useState("");
  const [seguimiento, setSeguimiento] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4002/expedientes/${id}`);
        const data = response.data;
        setPadecimientos(data.padecimientos);
        setDiagnostico(data.diagnostico);
        setHistClinica(data.histClinica);
        setFamiliograma(data.familiograma);
        setSeguimiento(data.seguimiento);
      } catch (error) {
        console.error("Error al obtener el expediente:", error);
      }
    };

    fetchData();
  }, [id]);

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

  const handleSubmit = async () => {
    const expediente = {
      padecimientos,
      diagnostico,
      histClinica,
      familiograma,
      seguimiento,
    };

    try {
      await axios.put(`http://localhost:4002/expedientes/${id}`, expediente);
      navigate("/expedientes");
    } catch (error) {
      console.error("Error al actualizar el expediente:", error);
    }
  };

  /* value=() recibe el dato que va a presentar en campo de texto */
  return (
    <Content>
      <h1>EDITAR PSICOLOGO</h1>
      <label>
        Padecimientos:
        <input
          type="text"
          value={padecimientos}
          onChange={handlePadecimientos}
        />
      </label>
      <label>
        Diagnóstico:
        <input
          type="text"
          value={diagnostico}
          onChange={handleDiagnostico}
        />
      </label>
      <label>
        Historia Clínica:
        <input
          type="text"
          value={histClinica}
          onChange={handleHistClinica}
        />
      </label>
      <label>
        Familiograma:
        <input
          type="text"
          value={familiograma}
          onChange={handleFamiliograma}
        />
      </label>
      <label>
        Seguimiento:
        <input
          type="text"
          value={seguimiento}
          onChange={handleSeguimiento}
        />
      </label>
      
      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};

export default ExpedienteEdit;