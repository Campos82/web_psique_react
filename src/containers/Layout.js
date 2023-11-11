import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;