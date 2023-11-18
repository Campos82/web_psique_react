import React from "react";
import Content from "../components/Content";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import LayoutHome from "../containers/LayoutHome";
import Imagen from "../images/home.png";

const Home = () => {
  return (
    <LayoutHome>
      <Content>
        <center>
          <h1> APP PSIQUEDATA </h1>
          {/*<img src={Imagen} alt="logo"/>*/}
          <h2> ¿Eres nuevo? </h2>
          <a href="pacientes-addHome">
            <Button variant="contained" startIcon={<GroupIcon />}>
              Regístrate
            </Button>
          </a>
        </center>
      </Content>
    </LayoutHome>
  );
};

export default Home;
