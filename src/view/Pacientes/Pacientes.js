import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import PacienteServices from "../../services/PacienteServices";
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
import { useHistory } from "react-router";

const Pacientes = () => {
  const[paciente, setPaciente]=useState([]);

  const server='http://localhost:4002';

  const getData=async()=>{
    const {data}=await axios.get(`${server}/pacientes`);
    console.log(data);
    setPaciente(data);
  };

  useEffect(()=>{
    getData();
  },[]
  );

  const DisplayData = paciente.map((info) => {
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
        <TableCell>{info.edadPaciente}</TableCell>
        <TableCell>{info.sexoPaciente}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`pacientes-edit/${info.idPaciente}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await PacienteServices.deletePaciente(info.idPaciente);
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
      <h1> PACIENTES </h1>
      <a href="/pacientes-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar pacientes
        </Button>
      </a>
      <h3>Listado de Pacientes</h3>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Ap1</TableCell>
                <TableCell>Ap2</TableCell>
                <TableCell>Edad</TableCell>
                <TableCell>Sexo</TableCell>
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

export default Pacientes;