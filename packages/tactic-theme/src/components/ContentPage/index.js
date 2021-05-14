import React from "react";
import { connect } from "frontity";
import { Container } from "./styles";

const ContentPage = ({ children }) => {
  return <Container>{children}</Container>;
};

export default connect(ContentPage);
