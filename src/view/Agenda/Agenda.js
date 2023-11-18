import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import AgendaServices from "../../services/AgendaServices";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../containers/Layout";
import { useParams } from "react-router-dom";
import PacienteServices from "../../services/PacienteServices";

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);
  const [idPsicologo, setidPsicologo] = useState("")
  const usuarioString = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(usuarioString);

  const server = 'http://localhost:4002';

  const routeParams = useParams();

  const getData = async () => {
    setidPsicologo(usuario.idPsicologo);

    const data = await PacienteServices.getAgendas(usuario.idPsicologo);
    console.log("-- ag-data --",data);
    setAgenda(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = agenda.map((info) => {
    return (
      <TableRow
        key={info.idAgenda}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {/*<TableCell component="th" scope="row">
          {info.idAgenda}
    </TableCell>*/}
        <TableCell>{info.agenda_pacientes.pacientes_usuarios.nombre}</TableCell>
        <TableCell>{info.agenda_pacientes.pacientes_usuarios.ap1}</TableCell>
        <TableCell>{info.agenda_pacientes.pacientes_usuarios.ap2}</TableCell>
        <TableCell>{info.comentario}</TableCell>
        <TableCell>{info.fecha}</TableCell>
        <TableCell>{info.hora}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`agenda-edit/${info.idAgenda}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await AgendaServices.deleteAgenda(info.idAgenda);
              await getData();
            }}
          >
            <DeleteIcon color="danger" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Layout>
      <Content>
        <h1> CITAS </h1>
        <a href="/agenda-add">
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Programar cita
          </Button>
        </a>
        <h3>Citas pendientes</h3>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell>No.</TableCell>*/}
                  <TableCell><h4>Nombre</h4></TableCell>
                  <TableCell><h4>Ap1</h4></TableCell>
                  <TableCell><h4>Ap2</h4></TableCell>
                  <TableCell><h4>Comentario</h4></TableCell>
                  <TableCell><h4>Fecha</h4></TableCell>
                  <TableCell><h4>Hora</h4></TableCell>
                  <TableCell><h4><font color="grey">Editar</font></h4></TableCell>
                  <TableCell><h4><font color="grey">Borrar</font></h4></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{DisplayData}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </Content>
    </Layout>
    
  );
};

export default Agenda;
