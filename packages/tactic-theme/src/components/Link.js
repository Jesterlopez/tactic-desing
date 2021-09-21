import React from "react";
import { connect } from "frontity";

const Link = ({ href, actions, children, className }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        actions.router.set(href);
        document.scrollingElement.scrollTop = 0;
      }}
      className={className}
    >
      {children}
    </a>
  );
};

export default connect(Link);
