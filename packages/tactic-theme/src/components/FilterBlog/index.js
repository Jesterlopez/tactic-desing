import React from "react";
import { connect } from "frontity";
import { Container } from "./styles";

const FilterBlog = ({ state, actions, children, key }) => {
  return (
    <>
      <Container key={key}>
        <a
          className="category"
          onClick={(e) => {
            e.preventDefault();
            actions.theme.setFilterBlogValue(e.target.text);
          }}
          href="#"
        >
          {children}
        </a>
      </Container>
    </>
  );
};

export default connect(FilterBlog);
