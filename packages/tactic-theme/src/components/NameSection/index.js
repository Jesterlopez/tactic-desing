import React from "react";
import { connect } from "frontity";
import { TitleH1 } from "./styles";

const NameSection = ({ children }) => {
  return <TitleH1>{children}</TitleH1>;
};

export default connect(NameSection);
