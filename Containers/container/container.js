import React from "react";
import ContainerWrapper from "../../Wrappers/containerWrapper";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";

const Container = ({ children, data }) => {
  return (
    <ContainerWrapper>
      <Sidebar data={data} />
      {children}
    </ContainerWrapper>
  );
};

export default Container;
