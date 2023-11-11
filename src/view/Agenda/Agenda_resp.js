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

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);
  const [paciente, setPacientes] = useState([]);

  const server = 'http://localhost:4002';

  const getData = async () => {
    const { data } = await axios.get(`${server}/agenda`);
    const { data2 } = await axios.get(`${server}/pacientes`);
    console.log(data);
    setAgenda(data);
    setPacientes(data2);
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = agenda.map((info) => {
    const pacienteInfo = paciente.find(p => p.idPaciente === info.idPaciente);
    return (
      <TableRow
        key={info.idAgenda}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.idAgenda}
        </TableCell>
        <TableCell>{pacienteInfo ? pacienteInfo.nomPaciente : 'N/A'}</TableCell>
        <TableCell>{pacienteInfo ? pacienteInfo.ap1Paciente : 'N/A'}</TableCell>
        <TableCell>{pacienteInfo ? pacienteInfo.ap2Paciente : 'N/A'}</TableCell>
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
    <Content>
      <h1> AGENDA </h1>
      <a href="/agenda-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Programar agenda
        </Button>
      </a>
      <h3>Listado de consultas</h3>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Ap1</TableCell>
                <TableCell>Ap2</TableCell>
                <TableCell>Comentario</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Content>
  );
};

export default Agenda;
