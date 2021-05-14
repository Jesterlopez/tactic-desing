import React from "react";
import { connect } from "frontity";
import {} from "./styles";
import Paragraph from "../../components/Paragraph";

const Servicios = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Paragraph />
      <h1>Servicios</h1>
    </>
  );
};

export default connect(Servicios);
