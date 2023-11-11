import React from "react";
import HeaderHome from "../components/Header-home";
import Content from "../components/Content";

const LayoutHome = ({ children }) => {
  return (
    <div className="Layout">
      <HeaderHome />
      <Content>{children}</Content>
    </div>
  );
};

export default LayoutHome;