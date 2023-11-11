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
import Layout from "../../containers/Layout";


const Pacientes = () => {
  const[paciente, setPaciente]=useState([]);  // useState() sirve para renderizar la app 
                                              // con su varible y su función
                                              // los [] es porque recibe un arreglo del servidor de /pacientes

  const server='http://localhost:4002';

  const getData = async () => {
    const data = await axios.get(`${server}/pacientes?filter=` + JSON.stringify({
      "include": [
        {
          "relation": "paciente_psicologo"
        },
      ]
    }));
    console.log(data.data);
    setPaciente(data.data);
  }

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
        {/*<TableCell component="th" scope="row">
          {info.idPaciente}
    </TableCell>*/}
        <TableCell>{info.nomPaciente}</TableCell>
        <TableCell>{info.ap1Paciente}</TableCell>
        <TableCell>{info.ap2Paciente}</TableCell>
        <TableCell>{info.edadPaciente}</TableCell>
        {/*<TableCell>{info.sexoPaciente}</TableCell>*/}
        <TableCell>{info.paciente_psicologo.nomPsicolgo}</TableCell>
        <TableCell>{info.paciente_psicologo.ap1Psicolgo}</TableCell>
        <TableCell>{info.paciente_psicologo.ap2Psicolgo}</TableCell>
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
    <Layout>
        <Content>
        <h1> PACIENTES </h1>
        <a href="/pacientes-add">
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Agregar paciente
          </Button>
        </a>
        <h3>Listado de Pacientes</h3>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell>No.</TableCell>*/}
                  <TableCell><h3>Nombre</h3></TableCell>
                  <TableCell><h3>Ap1</h3></TableCell>
                  <TableCell><h3>Ap2</h3></TableCell>
                  <TableCell><h3>Edad</h3></TableCell>
                  {/*<TableCell><h3>Sexo</h3></TableCell>*/}
                  <TableCell><h3><font color="gray">Psicologo</font></h3></TableCell>
                  <TableCell><h3><font color="gray">Ap1</font></h3></TableCell>
                  <TableCell><h3><font color="gray">Ap2</font></h3></TableCell>
                  <TableCell><h3>Editar</h3></TableCell>
                  <TableCell><h3>Borrar</h3></TableCell>
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

export default Pacientes;