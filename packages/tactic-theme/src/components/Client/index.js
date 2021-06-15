import React from "react";
import { connect } from "frontity";
import { ContainerClient, Container } from "./styles";

const Client = ({ state, img }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const image = pageData.acf.imagen_certificado;

  // image.map((imagen) => {
  //   console.log(imagen.imagen.url);
  // });

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
        {/* <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient>
        <ContainerClient>
          <img src="https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2016%2F10%2FLille-Grand-Palais-4.png&w=350&h=350&zc=0&q=100" />
        </ContainerClient> */}
      </Container>
    </>
  );
};

export default connect(Client);
