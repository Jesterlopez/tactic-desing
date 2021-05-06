import React from "react";
import { connect } from "frontity";

import { HeaderContainer, HeaderRight } from "./styles";

const ContainerHeader = () => {
  return (
    <>
      <HeaderContainer id="header">
        <HeaderRight></HeaderRight>
      </HeaderContainer>
    </>
  );
};

export default connect(ContainerHeader);
