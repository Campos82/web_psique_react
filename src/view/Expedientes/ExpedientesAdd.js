import React, { useState } from "react";
import Content from "../../components/Content";
import { useParams, useNavigate } from "react-router-dom";
import ExpedienteServices from "../../services/ExpedienteServices";

// Librerias GRID
import Grid from "@mui/material/Grid";

// LIBRERIAS FORMULARIOS
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";


const ExpedientesAdd = () => {
  const [padecimientos, setPadecimientos] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [histClinica, setHistClinica] = useState("");
  const [familiograma, setFamiliograma] = useState("");
  const [seguimiento, setSeguimiento] = useState("");
  
  const navigate = useNavigate();

  const handlePadecimientos = (event) => {
    setPadecimientos(event.target.value);
  };
  const handleDiagnostico = (event) => {
    setDiagnostico(event.target.value);
  };
  const handleHistClinica = (event) => {
    setHistClinica(event.target.value);
  };
  const handleFamiliograma = (event) => {
    setFamiliograma(event.target.value);
  };
  const handleSeguimiento = (event) => {
    setSeguimiento(event.target.value);
  };

  const handleSubmit = (event) => {
    const expediente = {
      padecimientos: padecimientos,
      diagnostico: diagnostico,
      histClinica: histClinica,
      familiograma: familiograma,
      seguimiento: seguimiento,
    };
    console.log(expediente);
    ExpedienteServices.createExpediente(expediente);
    navigate("/expedientes");
  };

  return (
    <Content>
      <form>
        <h1> EXPEDIENTE </h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
            <InputLabel id="paciente">Paciente</InputLabel>
              <Select
                labelId="paciente"
                id="paciente"
                name="paciente"
                onChange={" "}
              >
                <MenuItem key="1" value="juan">
                  Juan Hernandez
                </MenuItem>
                <MenuItem key="2" value="patricia">
                  Patricia Olivares
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="padecimientos"
                id="padecimientos"
                onChange={handlePadecimientos}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="diagnostico"
                id="diagnostico"
                onChange={handleDiagnostico}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="histClinica"
                id="histClinica"
                onChange={handleHistClinica}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="familiograma"
                id="familiograma"
                onChange={handleFamiliograma}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="seguimiento"
                id="seguimiento"
                onChange={handleSeguimiento}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
            >
              Registrar
            </Button>
          </Grid>
          <Grid item xs={2}>
            <a href="/expedientes"> Cancelar </a>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default ExpedientesAdd;
