import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import AgendaServices from "../../services/AgendaServices";

const AgendaEdit = (id) => {
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [idPaciente, setidPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  
  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  const getData = async () => {
    const {data}=await axios.get(`${server}/agenda/${routeParams.id}?filter=` + JSON.stringify({
      "include": [
        {
          "relation": "agenda_pacientes"
        },
      ]
    }));
    setComentario(data.comentario);
    setFecha(data.fecha);
    setHora(data.hora);
    setidPaciente(data.idPaciente)
    setnomPaciente(data.agenda_pacientes.nomPaciente);
    setap1Paciente(data.agenda_pacientes.ap1Paciente);
    setap2Paciente(data.agenda_pacientes.ap2Paciente);
  };

  useEffect(() => {
    getData();
  }, []);
  
  const handleComentario = (event) => {
    setComentario(event.target.value);
  };
  const handleFecha = (event) => {
    setFecha(event.target.value);
  };
  const handleHora = (event) => {
    setHora(event.target.value);
  };
  const Cancelar = () => {
    navigate("/agenda");
  };

  const handleSubmit = () => {
    let agenda = {
      comentario: comentario,
      fecha: fecha,
      hora: hora,
      idPaciente: idPaciente,
    };
    AgendaServices.updateAgenda(agenda, routeParams.id);
    navigate("/agenda");
  };
  
  return (
    <Content>
      <h1>EDITAR AGENDA</h1>
      <center>
        <table class="wrapper">
          <tr>
            <td>
              <label class="textoCaja">
                <font color="grey"><h3>{nomPaciente+" "+ap1Paciente+" "+ap2Paciente}</h3>  </font>
                {/*<input type="text" class="redondeado" 
                  value={nomPaciente+" "+ap1Paciente+" "+ap2Paciente} readOnly/>*/}
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
                Comentario:
                <input type="text" class="redondeado" name="comentario"  value={comentario} onChange={handleComentario} />
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
                Fecha:
                <input type="text" class="redondeado" name="fecha" value={fecha} onChange={handleFecha} />
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
                Hora:
                <input type="text" class="redondeado" name="hora" value={hora} onChange={handleHora} />
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
export default AgendaEdit;