import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import AgendaServices from "../../services/AgendaServices";
import LayoutAdd_px from "../../containers/LayoutAdd_px";


/* AQUI EL PACIENTE PUEDE PROGRAMAR UNA CITA */

const PacientesAgenda = (id) => {
  const [agenda, setAgenda] = useState([]);
  const [idPaciente, setidPaciente] = useState("");
  const [nomPaciente, setnomPaciente] = useState("");
  const [ap1Paciente, setap1Paciente] = useState("");
  const [ap2Paciente, setap2Paciente] = useState("");

  const routeParams = useParams();
  const navigate = useNavigate();
  const server = 'http://localhost:4002';


  const getData = async () => {
    const data = await axios.get(`${server}/pacientes?filter=` + JSON.stringify({
      "where": {
        "idPaciente": routeParams.id
      },
      "include": [
        {
          "relation": "pacientes_usuarios",
        },
      ]
    }));
    console.log(data.data[0]);
    setidPaciente(data.data[0].idPaciente);
    setnomPaciente(data.data[0].pacientes_usuarios.nombre);
    setap1Paciente(data.data[0].pacientes_usuarios.ap1);
    setap2Paciente(data.data[0].pacientes_usuarios.ap2);
    console.log(data.data[0]);

    const  data2  = await AgendaServices.getAgendaIdP(data.data[0].idPaciente);

    console.log(data2);
    setAgenda(data2);
    
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
        <TableCell>{info.comentario}</TableCell>
        <TableCell>{info.fecha}</TableCell>
        <TableCell>{info.hora}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`/pacientes-agenda-edit/${info.idAgenda}`}>
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
    <LayoutAdd_px>
      <Content>
        <div>
          <table>
            <tr>
              <td>
                <h1> CITAS </h1>
              </td>
              <td>
                <h2> {nomPaciente + " " + ap1Paciente + " " + ap2Paciente} </h2>
              </td>
              <td>
                <a href={`/agenda-pacientes/${routeParams.id}`}>
                  <Button variant="contained" startIcon={<PersonAddIcon />}>
                    Programar cita
                  </Button>
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell>No.</TableCell>*/}
                  
                  <TableCell><h3>Comentario</h3></TableCell>
                  <TableCell><h3>Fecha</h3></TableCell>
                  <TableCell><h3>Hora</h3></TableCell>
                  <TableCell><h3>Editar</h3></TableCell>
                  <TableCell><h3>Borrar</h3></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{DisplayData}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </Content>
    </LayoutAdd_px>
    
  );
};

export default PacientesAgenda;
