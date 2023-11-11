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
  const [idPaciente, setidPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");


  const navigate = useNavigate();

  const server='http://localhost:4002';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data}=await axios.get(`${server}/expedientes/${id}?filter=` + JSON.stringify({
          "include": [
            {
              "relation": "expediente_pacientes"
            },
          ]
        }));
        setPadecimientos(data.padecimientos);
        setDiagnostico(data.diagnostico);
        setHistClinica(data.histClinica);
        setFamiliograma(data.familiograma);
        setSeguimiento(data.seguimiento);
        setidPaciente(data.idPaciente);
        setnomPaciente(data.expediente_pacientes.nomPaciente);
        setap1Paciente(data.expediente_pacientes.ap1Paciente);
        setap2Paciente(data.expediente_pacientes.ap2Paciente);
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
  const Cancelar = () => {
    navigate("/expedientes");
  };



  const handleSubmit = async () => {
    const expediente = {
      padecimientos,
      diagnostico,
      histClinica,
      familiograma,
      seguimiento,
      idPaciente,
    };

    console.log(expediente);

    try {
      await axios.put(`http://localhost:4002/expedientes/${id}`, expediente);
      //navigate("/expedientes");
      navigate(`/expedientes-consulta/${id}`);
    } catch (error) {
      console.error("Error al actualizar el expediente:", error);
    }
  };

  /* value=() recibe el dato que va a presentar en campo de texto */
  return (
    <Content>
      <h1>EDITAR EXPEDIENTE</h1>
      <center>
        <table class="wrapper">
          <tr>
            <td>
              <label>
                <h3>{nomPaciente+" "+ap1Paciente+" "+ap2Paciente}</h3>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Padecimientos:
                <input type="text" class="redondeado" value={padecimientos} onChange={handlePadecimientos} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Diagnóstico:
                <input type="text" class="redondeado" value={diagnostico} onChange={handleDiagnostico} />
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
                Historia Clínica:
                <input type="text" class="redondeado" value={histClinica} onChange={handleHistClinica} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Familiograma:
                <input type="text" class="redondeado" value={familiograma} onChange={handleFamiliograma} />
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
                Seguimiento:
                <input type="text" class="redondeado" value={seguimiento} onChange={handleSeguimiento} />
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

export default ExpedienteEdit;