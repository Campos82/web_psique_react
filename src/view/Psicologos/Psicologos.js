import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import PsicologoServices from "../../services/PsicologoServices";
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

const Psicologos = () => {
  const[psicologo, setPsicologo] = useState([]);

  const server = `http://localhost:4002`;
  const getData = async () => {
    const { data } = await axios.get(`${server}/psicologos`);
    console.log(data);
    setPsicologo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = psicologo.map((info) => {
    return (
      <TableRow
        key={info.idPsicolgo}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {/*<TableCell component="th" scope="row">
          {info.idPsicolgo}
    </TableCell>*/}

        <TableCell>{info.nomPsicolgo}</TableCell>
        <TableCell>{info.ap1Psicolgo}</TableCell>
        <TableCell>{info.ap2Psicolgo}</TableCell>
        <TableCell>{info.edadPsicolgo}</TableCell>
        <TableCell>{info.sexoPsicolgo}</TableCell>
        <TableCell>{info.especialidad}</TableCell>

        <TableCell>
          <IconButton aria-label="editar">
            <a href={`psicologos-edit/${info.idPsicolgo}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>

        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await PsicologoServices.deletePsicologo(info.idPsicolgo);
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
        <h1>PSICOLOGOS</h1>
        <a href="/psicologos-add">
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Agregar psicologo
          </Button>
        </a>
        <h3>Listado de Psicologos</h3>
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
                  <TableCell><h3>Sexo</h3></TableCell>
                  <TableCell><h3>Especialidad</h3></TableCell>
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
export default Psicologos;
