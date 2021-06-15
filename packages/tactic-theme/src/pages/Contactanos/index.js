import React, { useEffect } from "react";
import { connect } from "frontity";
import {} from "./styles";

const Contactanos = ({ state, libraries }) => {
  const data = state.source.get("/contactanos");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: contactForm.content.rendered }}
        style={{ marginTop: "10%" }}
      ></div>
    </>
  );
};

export default connect(Contactanos);
