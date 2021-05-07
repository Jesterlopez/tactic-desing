import React from "react";
import { connect } from "frontity";
import { Service } from "./styles";

import { IconWaveQuote } from "../Icons";

const ServiceItem = ({ children }) => {
  return (
    <Service>
      <IconWaveQuote color="#FFF" />
      {children}
    </Service>
  );
};

export default connect(ServiceItem);
