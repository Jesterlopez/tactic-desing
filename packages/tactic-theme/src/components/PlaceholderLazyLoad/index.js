import React from "react";
import { connect } from "frontity";
import { Container } from "./styles";

const PlaceholderLazyLoad = ({ state, background }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container background={background}>
      <img src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png" />
    </Container>
  );
};

export default connect(PlaceholderLazyLoad);
