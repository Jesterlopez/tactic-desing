import React from "react";
import { connect } from "frontity";

const AnchorLink = ({ href, children, className }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default connect(AnchorLink);
