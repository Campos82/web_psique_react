import React from "react";
import Header from "../components/Header";
import Headerhome from "../components/Header-home";
import Content from "../components/Content";
import Footer from "../components/Footer";


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {/* <Headerhome />*/}
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;