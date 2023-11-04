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
  
  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  const getData = async () => {
    const { data } = await axios.get(`${server}/agenda/${routeParams.id}`);
    setComentario(data.comentario);
    setFecha(data.fecha);
    setHora(data.hora);
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
  
  const handleSubmit = () => {
    let agenda = {
      comentario: comentario,
      fecha: fecha,
      hora: hora,
    };
    AgendaServices.updateAgenda(agenda, routeParams.id);
    navigate("/agenda");
  };

  return (
    <Content>
      <h1>EDITAR AGENDA</h1>
      <label>
        Comentario:
        <input
          type="text"
          name="comentario"
          value={comentario}
          onChange={handleComentario}
        />
      </label>

      <label>
        Fecha:
        <input
          type="text"
          name="fecha"
          value={fecha}
          onChange={handleFecha}
        />
      </label>

      <label>
        Hora:
        <input
          type="text"
          name="hora"
          value={hora}
          onChange={handleHora}
        />
      </label>

      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};
export default AgendaEdit;