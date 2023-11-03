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

const Psicologos_seguimiento = () => {
  const [paciente, setPaciente] = useState("");
  const [sesion, setSesion] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [pruebas, setPruebas] = useState("");
  const [sugerencias, setSugerencias] = useState("");
  const [prox_cita, setProx_cita] = useState("");

  const handlePaciente = (event) => {
    this.setPaciente(event.target.value);
  };
  const handleSesion = (event) => {
    this.setSesion(event.target.value);
  };
  const handleObservaciones = (event) => {
    this.setObservaciones(event.target.value);
  };
  const handlePruebas = (event) => {
    this.setPruebas(event.target.value);
  };
  const handleSugerencias = (event) => {
    this.setSugerencias(event.target.value);
  };
  const handleProx_cita = (event) => {
    this.setProx_cita(event.target.value);
  };
  const handleSumbit = (event) => {
    const seguimiento = {
      paciente: this.state.paciente,
      sesion: this.state.sesion,
      observaciones: this.state.observaciones,
      pruebas: this.state.pruebas,
      sugerencias: this.state.sugerencias,
      prox_cita: this.state.prox_cita,
    };
  };
  
  return (
    <Content>
      <form>
        <h1>SEGUIMIENTO DE PACIENTES</h1>
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
                label="sesion"
                id="sesion"
                onChange="{handleSesion}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="observaciones"
                id="observaciones"
                onChange="{handleObservaciones}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="pruebas"
                id="pruebas"
                onChange="{handlePruebas}"
              />
            </FormControl>
          </Grid>
          
          
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="sugerencias"
                id="sugerencias"
                onChange="{handleSugerencias}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="prox_cita"
                id="prox_cita"
                onChange="{handleProx_cita}"
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
              onClick="{handleSubmit}"
            >
              Actualizar
            </Button>
          </Grid>
          
          <Grid item xs={2}>
          <a href="/psicologos"> Salir </a>
          </Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default Psicologos_seguimiento;