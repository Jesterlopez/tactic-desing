import React from "react";
import { connect } from "frontity";
import { TitleBlock } from "./styles";

const Title = ({ children, className }) => {
  return <TitleBlock className={className}>{children}</TitleBlock>;
};

export default connect(Title);
