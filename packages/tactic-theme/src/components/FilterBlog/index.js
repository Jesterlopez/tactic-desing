import React from "react";
import { connect } from "frontity";
import { Container } from "./styles";

const FilterBlog = ({ state, actions, children, key }) => {
  return (
    <>
      <Container key={key}>
        <a
          className="tags"
          onClick={(e) => {
            e.preventDefault();
            actions.theme.setFilterBlogValue(e.target.value);
          }}
          href="#"
        >
          {children}
        </a>
      </Container>
      {/* <ContainerFluid>
        {allBlog.map((blog) => {
          const idTags = Object.values(blog.tags);
          return idTags.map((tag) => {
            return (
              <a
                className="tags"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(e.target.text);
                }}
                href="#"
              >
                {state.source.tag[tag].name}
              </a>
            );
          });
        })}

      </ContainerFluid> */}
    </>
  );
};

export default connect(FilterBlog);
