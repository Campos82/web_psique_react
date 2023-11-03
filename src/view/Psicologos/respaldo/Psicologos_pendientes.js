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

const Psicologo_pendientes = () => {
  const [pendientes, setPendientes] = useState("");
  const [fecha, setFecha] = useState("");

  const handlePendientes = (event) => {
    this.setPendientes(event.target.value);
  };
  const handleFecha = (event) => {
    this.setFecha(event.target.value);
  };
  const handleSumbit = (event) => {
    const pendientes = {
      pendientes: this.state.pendientes,
      fecha: this.state.fecha,
    };
  };
  
  return (
    <Content>
      <form>
        <h1>PENDIENTES</h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="pendientes"
                id="pendientes"
                onChange="{handlePendientes}"
              />
            </FormControl>
          </Grid>
          <Grid container spacing={2}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
            <input 
                type="date" 
                value="2023-10-25" 
                onChange="{handleFecha}"/>
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

          <Grid item xs={2}>
          <a href="/psicologos"> Salir </a>
          </Grid>
        </Grid>
      </form>
    </Content>
  );
};

export default Psicologo_pendientes;