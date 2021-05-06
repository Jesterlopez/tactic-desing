import React from "react";
import { connect } from "frontity";
import {
  Borders,
  BorderTop,
  BorderBottom,
  BorderLeft,
  BorderRight,
} from "./styles";

const BorderPage = () => {
  return (
    <>
      <Borders className="borders">
        <BorderTop></BorderTop>
        <BorderBottom></BorderBottom>
        <BorderLeft></BorderLeft>
        <BorderRight></BorderRight>
      </Borders>
    </>
  );
};

export default connect(BorderPage);
