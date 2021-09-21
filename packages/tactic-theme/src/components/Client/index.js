import React from "react";
import { connect } from "frontity";
import { ContainerClient, Container } from "./styles";

const Client = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const image = pageData.acf.imagen_certificado;

  return (
    <>
      <Container className="fadeInUp fadeObserve">
        {image.map((imagen) => {
          return (
            <ContainerClient key={imagen.imagen.id}>
              <img src={imagen.imagen.url} />
            </ContainerClient>
          );
        })}
      </Container>
    </>
  );
};

export default connect(Client);
