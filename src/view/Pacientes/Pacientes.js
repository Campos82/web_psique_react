import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import Headerpaciente from "../../components/Header-paciente";

const Pacientes = () => {
  return (
    <div>
      <Headerpaciente>

      </Headerpaciente>
      <Content>
      <h1> PACIENTES </h1>
      <h2> CALENDARIO AGENDA </h2>
    </Content>
    </div>
  );
};

export default Pacientes;