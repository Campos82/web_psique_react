import React from "react";
import HeaderLogin from "../components/Heder-login";
import Content from "../components/Content";
import Header1 from "../components/Header1";

const LayoutLogin = ({ children }) => {
  return (
    <div className="Layout">
      <Header1/>
      <HeaderLogin />
      <Content>{children}</Content>
    </div>
  );
};

export default LayoutLogin;