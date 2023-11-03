import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";

// Librerias GRID
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// LIBRERIAS DE ICONOS
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

// LIBRERIAS FORMULARIOS
import { useFormControl } from "@mui/material/FormControl";
import {
  FormControl,
  FormLabel,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";

const Psicologos_histCli = () => {
  const [paciente, setPaciente] = useState("");
  const [familiograma, setFamiliograma] = useState("");
  const [antecedentes, setAntecedentes] = useState("");
  const [padecimientos, setPadecimientos] = useState("");
  const [tratamientos, setTratamientos] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  const handlePaciente = (event) => {
    this.setPaciente(event.target.value);
  };
  const handleFamiliograma = (event) => {
    this.setFamiliograma(event.target.value);
  };
  const handleAntecedentes = (event) => {
    this.setAntecedentes(event.target.value);
  };
  const handlePadecimientos = (event) => {
    this.setPadecimientos(event.target.value);
  };
  const handleTratamientos = (event) => {
    this.setTratamientos(event.target.value);
  };
  const handleDiagnostico = (event) => {
    this.setDiagnostico(event.target.value);
  };
  const handleSumbit = (event) => {
    const psicologo = {
      paciente: this.state.paciente,
      familiograma: this.state.familiograma,
      antecedentes: this.state.antecedentes,
      padecimientos: this.state.padecimientos,
      tratamientos: this.state.tratamientos,
      diagnostico: this.state.diagnostico,
    };
  };
  
  return (
    <Content>
      <form>
        <h1> HISTORIA CLINICA </h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
            <InputLabel id="paciente">Paciente</InputLabel>
              <Select
                labelId="paciente"
                id="paciente"
                name="paciente"
                onChange="{handlePaciente}"
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
                label="familiograma"
                id="familiograma"
                onChange="{handleFamiliograma}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="antecedentes"
                id="antecedentes"
                onChange="{handleAntecedentes}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="padecimientos"
                id="padecimientos"
                onChange="{handlePadecimientos}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="tratamientos"
                id="tratamientos"
                onChange="{handleTratamientos}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="diagnostico"
                id="diagnostico"
                onChange="{handleDiagnostico}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick="{handleSubmit}"
            >
              Actualizar
            </Button>
          </Grid>
          <Grid item xs={2}>
            <a href="/psicologos"> Salir </a>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default Psicologos_histCli;