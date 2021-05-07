import React from "react";
import { connect } from "frontity";
import { BlockCont } from "./styles";

const BlockContent = ({ children }) => {
  return (
    <>
      <BlockCont>{children}</BlockCont>
    </>
  );
};

export default connect(BlockContent);
