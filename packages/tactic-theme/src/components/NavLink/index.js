import React from "react";
import { connect } from "frontity";

import { Anchor, Mask, NameLink } from "./styles";

const NavLink = ({ href, children }) => {
  return (
    <Anchor href={href}>
      <Mask>
        <NameLink>{children}</NameLink>
      </Mask>
    </Anchor>
  );
};

export default connect(NavLink);
