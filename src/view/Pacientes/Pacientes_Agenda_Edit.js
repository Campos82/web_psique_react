import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import LayoutAdd_px from "../../containers/LayoutAdd_px";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AgendaServices from "../../services/AgendaServices";

const PacientesAgendaEditar = (id) => {
  const [agenda, setAgenda] = useState([]);
  const [idPaciente, setidPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const routeParams = useParams();
  const navigate = useNavigate();
  const server = "http://localhost:4002";

  const getData = async () => {
    console.log(routeParams.id);
    const dataAg = await axios.get(`${server}/agenda/${routeParams.id}`);
    console.log(dataAg);
    setidPaciente(dataAg.data.idPaciente);
    setComentario(dataAg.data.comentario);
    setFecha(dataAg.data.fecha);
    setHora(dataAg.data.hora);

    const { data } = await axios.get(
      `${server}/usuarios/${dataAg.data.idPaciente}`
    );
    setnomPaciente(data.nombre);
    setap1Paciente(data.ap1);
    setap2Paciente(data.ap2);
    console.log(data);

    const data2 = await AgendaServices.getAgendaIdP(data.idPaciente);

    console.log(data2);
    setAgenda(data2);
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
      idPaciente: parseInt(idPaciente),
    };
    console.log(agenda);
    AgendaServices.updateAgenda(agenda, routeParams.id);
    navigate(`/pacientes-agenda/${idPaciente}`);
  };

  return (
    <LayoutAdd_px>
      <Content>
        <h1>Programar agenda</h1>
        <div className="div-formulario">
          <div>
            <h2> {nomPaciente + " " + ap1Paciente + " " + ap2Paciente} </h2>
          </div>
          <div>
            <label class="textoCaja"> Comentario: </label>
            <input
              type="text"
              value={comentario}
              class="redondeado"
              name="comentario"
              onChange={handleComentario}
            />
          </div>
          <div>
            <label class="textoCaja"> Fecha: </label>
            <input
              type="text"
              value={fecha}
              class="redondeado"
              name="fecha"
              onChange={handleFecha}
            />
          </div>
          <div>
            <label class="textoCaja"> Hora: </label>
            <input
              type="text"
              value={hora}
              class="redondeado"
              name="hora"
              onChange={handleHora}
            />
          </div>
          <div>
            <p>
              <button class="estiloBoton" onClick={handleSubmit}>
                {" "}
                Editar{" "}
              </button>
              <button class="estiloBoton" onClick={Cancelar}>
                {" "}
                Cancelar{" "}
              </button>
            </p>
          </div>
        </div>
      </Content>
    </LayoutAdd_px>
  );
};

export default PacientesAgendaEditar;
