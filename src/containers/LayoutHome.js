import React from "react";
import HeaderHome from "../components/Header-home";
import Header1 from "../components/Header1";
import Content from "../components/Content";
import "bulma/css/bulma.css";
  
const LayoutHome = ({ children }) => {
  return (
    <div className="Layout">
      <Header1/>
      <HeaderHome />
      <Content>{children}</Content>
    </div>
  );
};
  
export default LayoutHome;