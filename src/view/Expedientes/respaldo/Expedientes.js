import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Expedientes = () => {
  return (
    <Content>
      <h1>EXPEDIENTES</h1>
      <a href="calificaciones-add">
        <Button variant="contained" startIcon={<MenuBookIcon />}>
          Agregar Expediente
        </Button>
      </a>
    </Content>
  );
};

export default Expedientes;