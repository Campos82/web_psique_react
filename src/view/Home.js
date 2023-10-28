import React from "react";
import Content from "../components/Content";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import Headerhome from "../components/Header-home";

const Home = () => {
  return (
    <div>
      <Headerhome>

      </Headerhome>
      <Content>
        <h1> APP PSIQUEDATA </h1>
        <h2> ¿Eres nuevo? </h2>
        <a href="pacientes-add">
          <Button variant="contained" startIcon={<GroupIcon />}>
            Regístrate
          </Button>
        </a>
      </Content>
    </div>
    
  );
};

export default Home;
