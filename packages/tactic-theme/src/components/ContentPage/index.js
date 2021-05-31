import React from "react";
import { connect } from "frontity";
import { Container, ContainerBlog } from "./styles";

const ContentPage = ({ state, children, element }) => {
  const data = state.source.get(state.router.link);
  if (element === "blog") {
    // const dt = state.source.blog[data.id];
    // if (typeof dt === "undefined") {
    return (
      <>
        <ContainerBlog id="contentBlog">{children}</ContainerBlog>
      </>
    );
    // } else {
    //   return (
    //     <>
    //       <ContainerBlog
    //         color={dt.acf.text_color}
    //         background={dt.acf.background}
    //       >
    //         {children}
    //       </ContainerBlog>
    //     </>
    //   );
    // }
  } else {
    return <Container id="contentGeneral">{children}</Container>;
  }
};

export default connect(ContentPage);
