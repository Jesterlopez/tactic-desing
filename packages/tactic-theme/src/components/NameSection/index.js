import React from "react";
import { connect } from "frontity";
import { TitleH1 } from "./styles";

const NameSection = ({ children, className }) => {
  return <TitleH1 className={className}>{children}</TitleH1>;
};

export default connect(NameSection);
