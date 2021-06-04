import React from "react";
import { connect } from "frontity";
import { Color } from "./styles";

const ColorHeader = ({ state, className }) => {
  return (
    <>
      <Color className={className} />
    </>
  );
};

export default connect(ColorHeader);
