import React from "react";
import HeaderAdd_px from "../components/HeaderAdd_px";
import Header1 from "../components/Header1";
import Content from "../components/Content";

const LayoutAdd_px = ({ children }) => {
  return (
    <div className="Layout">
      <Header1/>
      <HeaderAdd_px/>
      <Content>{children}</Content>
    </div>
  );
};

export default LayoutAdd_px;