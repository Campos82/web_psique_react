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

const Cancelar_cita = () => {
  const [paciente, setPaciente] = useState("");
  const [psicologo, setPsicologo] = useState("");
  const [comentario, setComentario] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");

  const handlePaciente = (event) => {
    this.setPaciente(event.target.value);
  };
  const handlePsicologo = (event) => {
    this.setPsicologo(event.target.value);
  };
  const handleComentario = (event) => {
    this.setComentario(event.target.value);
  };
  const handleFecha = (event) => {
    this.setFecha(event.target.value);
  };
  const handleHora = (event) => {
    this.setHora(event.target.value);
  };
  const handleSumbit = (event) => {
    const modificar_cita = {
      paciente: this.state.paciente,
      psicologo: this.state.psicologo,
      comentario: this.state.comentario,
      fecha: this.state.fecha,
      hora: this.state.hora,
    };
  };
  
  return (
    <Content>
      <form>
        <h1>CANCELA TU CITA</h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="paciente"
                id="paciente"
                onChange="{handlePaciente}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="psicologo"
                id="psicologo"
                onChange="{handlePsicologo}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="comentario"
                id="comentario"
                onChange="{handleComentario}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="fecha"
                id="fecha"
                onChange="{handleFecha}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="hora"
                id="hora"
                onChange="{handleHora}"
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
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default Cancelar_cita;