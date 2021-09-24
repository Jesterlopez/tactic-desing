import React from "react";
import { connect } from "frontity";
import HelloComponent from "../HelloComponent";
import Paragraph from "../Paragraph";
import { ScrollDown } from "../ScrollDown";
import ColorHeader from "../ColorHeader";

import { HeaderContainer, HeaderRight, ContainerFullWidth } from "./styles";

const ContainerHeader = ({ state }) => {
  const dataPage = state.source.page[51];
  return (
      <HeaderContainer id="header">
        <ColorHeader element="home" className="slideInRightHome animation" />
        <ScrollDown />
        <HeaderRight className="header__animation" />
        {typeof dataPage === "undefined" ? null : (
          <Paragraph
            referencia={dataPage.acf.parrafo_con_cita.cita}
            fraseUp={dataPage.acf.parrafo_con_cita.frase_up}
            fraseMid={dataPage.acf.parrafo_con_cita.frase_down}
            fraseDown=""
          />
        )}
        <ContainerFullWidth id="containerHello">
          <HelloComponent />
        </ContainerFullWidth>
      </HeaderContainer>
  );
};

export default connect(ContainerHeader);
