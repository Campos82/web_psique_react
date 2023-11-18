import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import "../../styles/formularios.css";
import Layout from "../../containers/Layout";

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

  const server = "http://localhost:4002";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${server}/expedientes/${id}?filter=` +
            JSON.stringify({
              include: [
                {
                  relation: "expediente_pacientes",
                  "scope": {
                    "include": [
                      {
                        "relation": "pacientes_usuarios"
                      }
                    ]
                  }
                },
              ],
            })
        );
        setPadecimientos(data.padecimientos);
        setDiagnostico(data.diagnostico);
        setHistClinica(data.histClinica);
        setFamiliograma(data.familiograma);
        setSeguimiento(data.seguimiento);
        setidPaciente(data.idPaciente);
        setnomPaciente(data.expediente_pacientes.pacientes_usuarios.nombre);
        setap1Paciente(data.expediente_pacientes.pacientes_usuarios.ap1);
        setap2Paciente(data.expediente_pacientes.pacientes_usuarios.ap2);
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
    <Layout>
      <Content>
        <h1>EXPEDIENTE DEL PACIENTE</h1>
        <div className="div-formulario">
          <div>
            <label>
              <h3>{nomPaciente + " " + ap1Paciente + " " + ap2Paciente}</h3>
            </label>
          </div>
          <div>
            <label>
              Padecimientos:{" "}
              <font face="Candara Light, arial,verdana"> {padecimientos} </font>
            </label>
          </div>
          <div>
            <label>
              Diagnóstico:{" "}
              <font face="Candara Light, arial,verdana">{diagnostico}</font>
            </label>
          </div>
          <div>
            <label>
              Historia Clínica:{" "}
              <font face="Candara Light, arial,verdana">{histClinica}</font>
            </label>
          </div>
          <div>
            <label>
              Familiograma:{" "}
              <font face="Candara Light, arial,verdana">{familiograma}</font>
            </label>
          </div>
          <div>
            <label>
              Seguimiento:{" "}
              <font face="Candara Light, arial,verdana">{seguimiento}</font>
            </label>
          </div>
          <div>
            <button class="estiloBoton" onClick={Editar}>
              Editar
            </button>
            <button class="estiloBoton" onClick={Cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ExpedienteEdit;
