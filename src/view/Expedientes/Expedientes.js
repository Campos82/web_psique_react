import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import ExpedienteServices from "../../services/ExpedienteServices";
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
import PacienteServices from "../../services/PacienteServices";

const Expedientes = () => {
  const[expediente, setExpediente]=useState([]);
  /*const[paciente, setPaciente]=useState([]);*/
  
  const server='http://localhost:4002';

  const getData=async()=>{
    const {data}=await axios.get(`${server}/expedientes`);
    console.log(data);
    setExpediente(data);
  };

  /*const getDataP=async()=>{
    const {data}=await axios.get(`${server}/pacientes`);
    console.log(data);
    setPaciente(data);
  };*/

  useEffect(()=>{
    getData();
  },[]
  );

  /*const DisplayDataP = paciente.map((info) => {
    return (
      <TableRow
        key={info.idPaciente}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.idPaciente}
        </TableCell>
        <TableCell>{info.nomPaciente}</TableCell>
        <TableCell>{info.ap1Paciente}</TableCell>
        <TableCell>{info.ap2Paciente}</TableCell>
      </TableRow>
    );
  });*/

  const DisplayData = expediente.map((info) => {
    return (
      <TableRow
        key={info.idExpediente}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.idExpediente}
        </TableCell>
        <TableCell>{      }</TableCell>
        <TableCell>{      }</TableCell>
        <TableCell>{      }</TableCell>
        <TableCell>{info.padecimientos}</TableCell>
        <TableCell>{info.diagnostico}</TableCell>
        <TableCell>{info.histClinica}</TableCell>
        <TableCell>{info.familiograma}</TableCell>
        <TableCell>{info.seguimiento}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`expedientes-edit/${info.idExpediente}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await ExpedienteServices.deleteExpediente(info.idExpediente);
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
      <h1> EXPEDIENTES </h1>
      <a href="/expedientes-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar Expediente
        </Button>
      </a>
      <h3>Expediente de los pacientes</h3>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>    </TableCell>
                <TableCell>Paciente</TableCell>
                <TableCell>Ap1</TableCell>
                <TableCell>Ap2</TableCell>
                <TableCell>Padecimientos</TableCell>
                <TableCell>Diagnostico</TableCell>
                <TableCell>HistClinica</TableCell>
                <TableCell>Familiograma</TableCell>
                <TableCell>Seguimiento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Content>
  );
};

export default Expedientes;