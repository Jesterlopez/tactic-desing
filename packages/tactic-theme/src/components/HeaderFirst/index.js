import React from "react";
import { connect } from "frontity";
import HelloComponent from "../HelloComponent";
import Paragraph from "../Paragraph";

import { HeaderContainer, HeaderRight, ContainerFullWidth } from "./styles";

const ContainerHeader = () => {
  return (
    <>
      <HeaderContainer id="header">
        <HeaderRight />
        <Paragraph />
        <ContainerFullWidth>
          <HelloComponent />
        </ContainerFullWidth>
      </HeaderContainer>
    </>
  );
};

export default connect(ContainerHeader);
