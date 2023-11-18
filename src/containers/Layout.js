import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Content from "../components/Content";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header1/>
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;