import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";
import AgendaServices from "../../services/AgendaServices";
import Layout from "../../containers/Layout";

const AgendaEdit = (id) => {
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [idPaciente, setidPaciente] = useState("");

  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4002`;

  const getData = async () => {
    const { data } = await axios.get(`${server}/agenda/${routeParams.id}?filter=` + JSON.stringify({
          include: [
            {
              relation: "agenda_pacientes",
            },
          ],
        })
    );
    setComentario(data.comentario);
    setFecha(data.fecha);
    setHora(data.hora);
    setidPaciente(data.idPaciente);
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
    <Layout>
      <Content>
        <h1>Editar cita</h1>
        <div className="div-formulario">
          <div>
          </div>
          <div>
            <label> Comentario: </label>
            <textarea
              name="comentario"
              for="comentario"
              value={comentario}
              onChange={handleComentario}
              placeholder="Anade un comentario..."
              maxlength="300"
            ></textarea>
          </div>
          <div>
            <label class="textoCaja"> Fecha: </label>
            <input
              type="text"
              class="redondeado"
              name="fecha"
              value={fecha}
              onChange={handleFecha}
            />
          </div>
          <div>
            <label class="textoCaja"> Hora: </label>
            <input
              type="text"
              class="redondeado"
              name="hora"
              value={hora}
              onChange={handleHora}
            />
          </div>
          <div>
            <button class="estiloBoton" onClick={handleSubmit}>
              Actualizar
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
export default AgendaEdit;
