import React from "react";
import { connect } from "frontity";
import HelloComponent from "../HelloComponent";
import Paragraph from "../Paragraph";
import { ScrollDown } from "../ScrollDown";

import { HeaderContainer, HeaderRight, ContainerFullWidth } from "./styles";

const ContainerHeader = () => {
  return (
    <>
      <HeaderContainer id="header">
        <ScrollDown />
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
