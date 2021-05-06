import React from "react";
import { connect } from "frontity";
import HelloComponent from "../HelloComponent";

import { HeaderContainer, HeaderRight, ContainerFullWidth } from "./styles";

const ContainerHeader = () => {
  return (
    <>
      <HeaderContainer id="header">
        <HeaderRight></HeaderRight>
        <ContainerFullWidth>
          <HelloComponent />
        </ContainerFullWidth>
      </HeaderContainer>
    </>
  );
};

export default connect(ContainerHeader);
