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

const PsicologosAdd = () => {
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [cveEspecialidad, setCveEspecialidad] = useState("");

  const handleNombre = (event) => {
    this.setNombre(event.target.value);
  };
  const handleApellidoP = (event) => {
    this.setApPaterno(event.target.value);
  };
  const handleApellidoM = (event) => {
    this.setApMaterno(event.target.value);
  };
  const handleEspecialidad = (event) => {
    this.setCveEspecialidad(event.target.value);
  };
  const handleSumbit = (event) => {
    const maestro = {
      nombre: this.state.nombre,
      apellidoP: this.state.apellidoP,
      apellidoM: this.state.apellidoM,
      cveEspecialidad: this.state.cveEspecialidad,
    };
  };
  
  return (
    <Content>
      <form>
        <h1>CAPTURA DE PSICOLOGOS</h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Nombre"
                id="nombre"
                onChange="{handleNombre}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido paterno"
                id="apPaterno"
                onChange="{handleApellidoP}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido materno"
                id="apMaterno"
                onChange="{handleApellidoM}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="especialidadLbl">Especialidad</InputLabel>
              <Select
                labelId="especialidadLbl"
                id="cveEspecialidad"
                name="cveEspecialidad"
                onChange="{handleEspacialidad}"
              >
                <MenuItem key="1" value="ISC">
                  ISC
                </MenuItem>
                <MenuItem key="2" value="TICS">
                  TICS
                </MenuItem>
                <MenuItem key="3 " value="Industrial">
                  Industrial
                </MenuItem>
                <MenuItem key="4 " value="Alimentarias">
                  Alimentarias
                </MenuItem>
                <MenuItem key="5 " value="Gestión">
                  Gestión
                </MenuItem>
              </Select>
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
              Guardar
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default PsicologosAdd;