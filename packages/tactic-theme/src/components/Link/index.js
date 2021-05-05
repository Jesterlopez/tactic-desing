import React from "react";
import { connect } from "frontity";

import { Link, Mask, NameLink } from "./styles";

const Link = () => {
  return (
    <Link href="#">
      <Mask>
        <NameLink>Agency.</NameLink>
      </Mask>
    </Link>
  );
};

export default connect(Link);
