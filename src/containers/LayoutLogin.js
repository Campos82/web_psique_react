import React from "react";
import HeaderLogin from "../components/Heder-login";
import Content from "../components/Content";

const LayoutLogin = ({ children }) => {
  return (
    <div className="Layout">
      <HeaderLogin />
      <Content>{children}</Content>
    </div>
  );
};

export default LayoutLogin;