import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Grupos = () => {
  return (
    <Content>
      <h1>GRUPOS</h1>
      <a href="grupos-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar grupos
        </Button>
      </a>
    </Content>
  );
};

export default Grupos;