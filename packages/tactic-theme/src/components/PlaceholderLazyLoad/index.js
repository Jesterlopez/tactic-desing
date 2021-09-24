import React from "react";
import { connect } from "frontity";
import Logo from '../../assets/tactic-digital.png'
import { Container } from "./styles";

const PlaceholderLazyLoad = ({ state }) => {
  return (
    <Container>
      <img src={Logo} />
    </Container>
  );
};

export default connect(PlaceholderLazyLoad);
