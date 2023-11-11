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

  
  const Editar = () => {
    navigate(`/expedientes-edit/${id}`);
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
      navigate("/expedientes");
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
              <label class="textoCaja">
                <h3>{nomPaciente+" "+ap1Paciente+" "+ap2Paciente}</h3>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                <h4>Padecimientos: </h4> {padecimientos}
              </label>
            </td>
            <td>
              <label class="textoCaja">
                <h4>Diagnóstico: </h4> {diagnostico}
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
                <h4>Historia Clínica: </h4> {histClinica}
              </label>
            </td>
            <td>
              <label class="textoCaja">
                <h4>Familiograma: </h4> {familiograma}
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
                <h4>Seguimiento: </h4> {seguimiento}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <button class="estiloBoton" onClick={Editar}>Editar</button>
            </td>
            <td>
              <button class="estiloBoton" onClick={Cancelar}> Salir </button>
            </td>
          </tr>
        </table>
      </center>
      
      
      
      
      
      
      
      
      
    </Content>
  );
};

export default ExpedienteEdit;