import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Materias = () => {
  return (
    <Content>
      <h1>MATERIAS</h1>
      <a href="materias-add">
        <Button variant="contained" startIcon={<LibraryBooksIcon />}>
          Consultar citas
        </Button>
      </a>
    </Content>
  );
};

export default Materias;