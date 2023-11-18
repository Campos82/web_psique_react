import React from "react";
import "../styles/Content.css";

const Content = ({ children }) => {

  return <div className="content scroll">    {children}    </div>;
  
};

export default Content;