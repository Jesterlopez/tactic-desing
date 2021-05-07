import React from "react";
import { connect } from "frontity";

import { Anchor } from "./styles";

const AnchorLink = ({ href, children, className }) => {
  return (
    <Anchor href={href} className={className}>
      {children}
    </Anchor>
  );
};

export default connect(AnchorLink);
