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

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);

  const server = 'http://localhost:4002';

  const getData = async () => {
    const { data } = await axios.get(`${server}/agenda?filter=` + JSON.stringify({
      "include": [
        {
          "relation": "agenda_pacientes"
        },
      ]
    }));
    console.log(data);
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
        <TableCell>{info.agenda_pacientes.nomPaciente}</TableCell>
        <TableCell>{info.agenda_pacientes.ap1Paciente}</TableCell>
        <TableCell>{info.agenda_pacientes.ap2Paciente}</TableCell>
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
                  <TableCell><h3>Nombre</h3></TableCell>
                  <TableCell><h3>Ap1</h3></TableCell>
                  <TableCell><h3>Ap2</h3></TableCell>
                  <TableCell><h3>Comentario</h3></TableCell>
                  <TableCell><h3>Fecha</h3></TableCell>
                  <TableCell><h3>Hora</h3></TableCell>
                  <TableCell><h3><font color="grey">Editar</font></h3></TableCell>
                  <TableCell><h3><font color="grey">Borrar</font></h3></TableCell>
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
