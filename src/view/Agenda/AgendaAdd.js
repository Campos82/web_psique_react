import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import AgendaServices from "../../services/AgendaServices";

const AgendaAdd = () => {
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const navigate = useNavigate();

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
    console.log(agenda);
    AgendaServices.createAgenda(agenda);
    navigate("/agenda");
  };

  return (
    <Content>
      <h1>Programar agenda</h1>
      <label>
        Comentario:
        <input type="text" name="comentario" onChange={handleComentario} />
      </label>
      &nbsp; &nbsp;
      <label>
        Fecha:
        <input type="text" name="fecha" onChange={handleFecha} />
      </label>
      &nbsp; &nbsp;
      <label>
        Hora:
        <input type="text" name="hora" onChange={handleHora} />
      </label>
      &nbsp; &nbsp; &nbsp;
      <button onClick={handleSubmit}> Registrar </button>
    </Content>
  );
}

export default AgendaAdd;