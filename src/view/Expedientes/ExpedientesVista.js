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
import Layout from "../../containers/Layout";

const ExpedientesVistas = () => {
  const[expediente, setExpediente]=useState([]);
  
  const server='http://localhost:4002';

  const getData=async()=>{
    const {data}=await axios.get(`${server}/expedientes?filter=` + JSON.stringify({
      "include": [
        {
          "relation": "expediente_pacientes"
        },
      ]
    }));
    console.log(data);
    setExpediente(data);
  };

  useEffect(()=>{
    getData();
  },[]
  );

  const DisplayData = expediente.map((info) => {
    return (
      <TableRow
        key={info.idExpediente}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {/*<TableCell component="th" scope="row">
          {info.idExpediente}
    </TableCell>*/}
        <TableCell>{info.expediente_pacientes.nomPaciente}</TableCell>
        <TableCell>{info.expediente_pacientes.ap1Paciente}</TableCell>
        <TableCell>{info.expediente_pacientes.ap2Paciente}</TableCell>
        <TableCell>{info.seguimiento}</TableCell>
        <TableCell>
          <IconButton aria-label="Consultar">
            <a href={`expedientes-consulta/${info.idExpediente}`}>
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
    <Layout>
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
                  <TableCell><h3>Paciente</h3></TableCell>
                  <TableCell><h3>Ap1</h3></TableCell>
                  <TableCell><h3>Ap2</h3></TableCell>
                  <TableCell><h3>Seguimiento</h3></TableCell>
                  <TableCell><h3><font color="grey">Consultar</font></h3></TableCell>
                  <TableCell><h3><font color="grey">Eliminar</font></h3></TableCell>
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

export default ExpedientesVistas;