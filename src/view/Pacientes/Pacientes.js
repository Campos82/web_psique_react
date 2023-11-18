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
import { useParams } from "react-router-dom";
import UsuariosServices from "../../services/UsuariosServices";


const Pacientes = (id) => {
  const [usuario, setUsuario]=useState([]);  // useState() sirve para renderizar la app 
  const [paciente, setPaciente]=useState([]);   // con su varible y su función
                                                // los [] es porque recibe un arreglo del servidor de /pacientes
  const [psicologo, setPsicologo] = useState([]);
  const [idPsicologo, setidPsicologo] = useState("");
  const [nomPsicologo, setnomPsicologo] = useState("");
  const [ap1Psicologo, setap1Psicologo] = useState("");
  const [ap2Psicologo, setap2Psicologo] = useState("");
  

  const server=`http://localhost:4002`;
  const routeParams = useParams();

  const getData = async () => {
    setidPsicologo(routeParams.id);
    const data = await axios.get(`${server}/pacientes?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": routeParams.id
      },
      "include": [
        {
          "relation": "pacientes_usuarios"
        },
      ]
    }));
    console.log("-- px - user --",data.data);
    setPaciente(data.data);

    const data2 = await axios.get(`${server}/psicologos?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": routeParams.id
      },
      "include": [
        {
          "relation": "psicologos_usuarios"
        },
      ]
    }));
    console.log("-- psi - user --",data2.data[0]);
    setnomPsicologo(data2.data[0].psicologos_usuarios.nombre);
    setap1Psicologo(data2.data[0].psicologos_usuarios.ap1);
    setap2Psicologo(data2.data[0].psicologos_usuarios.ap2);
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
        {/*{<TableCell component="th" scope="row">
          {info.idPaciente}
    </TableCell>}*/}
        <TableCell>{info.pacientes_usuarios.nombre}</TableCell>
        <TableCell>{info.pacientes_usuarios.ap1}</TableCell>
        <TableCell>{info.pacientes_usuarios.ap2}</TableCell>
        <TableCell>{info.pacientes_usuarios.edad}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`/pacientes-edit/${info.idPaciente}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await PacienteServices.deletePaciente(info.idPaciente);
              await UsuariosServices.deleteUsuario(info.idUsuario)
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
        <h3> Psicologo: {nomPsicologo} {ap1Psicologo} {ap2Psicologo}</h3>
        <a href={`/pacientes-add/${idPsicologo}`}>
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Agregar paciente
          </Button>
        </a>
        <div>
          
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/*<TableCell>No.</TableCell>*/}
                  <TableCell><h4>Nombre</h4></TableCell>
                  <TableCell><h4>Ap1</h4></TableCell>
                  <TableCell><h4>Ap2</h4></TableCell>
                  <TableCell><h4>Edad</h4></TableCell>
                  {/*<TableCell><h4>Sexo</h4></TableCell>*/}
                  <TableCell><h4>Editar</h4></TableCell>
                  <TableCell><h4>Borrar</h4></TableCell>
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