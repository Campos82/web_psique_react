import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Headerpsicologo from "../../components/Header-psicologo";

const Psicologos = () => {
  return (
    <div>
      <Headerpsicologo>

      </Headerpsicologo>
      <Content>
      <h1> PSICOLOGO </h1>
      <h2> CALENDARIO AGENDA </h2>
    </Content>
    </div>
  );
};

export default Psicologos;