import React from "react";
import Content from "../components/Content";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import LayoutHome from "../containers/LayoutHome";

const Home = () => {
  return (
    <div>
      <LayoutHome>
        <Content >
            <h1> APP PSIQUEDATA </h1>
            <h2> ¿Eres nuevo? </h2>
            <a href="pacientes-add">
              <Button variant="contained" startIcon={<GroupIcon />}>
                Regístrate
              </Button>
            </a>
        </Content>
      </LayoutHome>
      
    </div>
    
  );
};

export default Home;
