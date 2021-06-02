import React from "react";
import { connect } from "frontity";
import TitleHeader from "../../components/TitleHeader";
import ColorHeader from "../../components/ColorHeader";

import { HeaderContainer } from "./styles";

const Servicios = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <HeaderContainer>
        <ColorHeader />
        <TitleHeader textUp="serv" textDown="icios" />
      </HeaderContainer>
    </>
  );
};

export default connect(Servicios);
