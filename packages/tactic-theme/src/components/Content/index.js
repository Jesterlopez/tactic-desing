import React from "react";
import { connect } from "frontity";

import {} from "./styles";
const Content = ({ state }) => {
  const data = state.source.get(state.router.link);
  return <></>;
};
export default connect(Content);
