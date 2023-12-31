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
  const [psicologo, setPsicologo] = useState([]);

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
        {/*<TableCell>{info.edadPsicolgo}</TableCell>
        <TableCell>{info.sexoPsicolgo}</TableCell>*/}
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
        <div>
          <center>
            <table>
              <tr>
                <td>
                  <h1>PSICOLOGOS</h1>
                </td>
                <td>
                  <h3> Profesionales de la salud mental</h3>
                </td>
                <td align="right">
                  <a href="/psicologos-add">
                    <Button variant="contained" startIcon={<PersonAddIcon />}>
                      Agregar psicologo
                    </Button>
                  </a>
                </td>
              </tr>
            </table>
          </center>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell>No.</TableCell>*/}
                  <TableCell>
                    <h4>Nombre</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Ap1</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Ap2</h4>
                  </TableCell>
                  {/*<TableCell><h4>Edad</h4></TableCell>
                  <TableCell><h4>Sexo</h4></TableCell>*/}
                  <TableCell>
                    <h4>Especialidad</h4>
                  </TableCell>
                  <TableCell>
                    <h4>
                      <font color="grey">Editar</font>
                    </h4>
                  </TableCell>
                  <TableCell>
                    <h4>
                      <font color="grey">Borrar</font>
                    </h4>
                  </TableCell>
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
