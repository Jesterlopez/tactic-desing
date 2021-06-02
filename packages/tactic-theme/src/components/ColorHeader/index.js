import React from "react";
import { connect } from "frontity";
import { Color } from "./styles";

const ColorHeader = ({ state }) => {
  return (
    <>
      <Color />
    </>
  );
};

export default connect(ColorHeader);
