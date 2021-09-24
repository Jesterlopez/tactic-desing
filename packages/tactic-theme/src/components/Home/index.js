import React, { useEffect } from "react";
import { connect } from "frontity";
import NameSection from "../NameSection";
import { IconWaveQuote } from "../Icons";
import BlockContent from "../BlockContent";
import Title from "../Titles";
import AnchorLink from "../AnchorLink";
import ImgParallax from "../ImgParallax";
import { Parallax } from "react-parallax";
import TitleSection from "../TitleSection";
import ContainerServices from "../ContainerServices";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import fxScrollHome from "../../utils/fxScrollHome";

import {
  ContainerContent,
  ContentSection,
  HeadBlockContent,
  BodyContent,
  ContainerImage,
} from "./styles";

const Home = ({ state }) => {
  const home = state.source.page[51];

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
    return () => {
      window.removeEventListener("scroll", scrollAnimations);
    };
  }, []);

  const scrollAnimations = () => fxScrollHome();

  return (
    <>
      {typeof home === "undefined" ? null : (
        <ContainerContent id="content">
          <div className="container__fullWidth">
            <ImgParallax
              imgID={home.featured_media}
              strength={150}
              className="img_mobile"
            ></ImgParallax>
          </div>
          <ContentSection className="padding__bottom__none" id="section">
            <div className="container__fullWidth">
              <NameSection>
                <IconWaveQuote className="big" />
                <TitleSection
                  textUp={home.acf.primer_seccion.titulo_de_la_seccion.slice(
                    0,
                    3
                  )}
                  textDown={home.acf.primer_seccion.titulo_de_la_seccion.slice(
                    3
                  )}
                />
              </NameSection>
            </div>
            <div className="container__left middle">
              <BlockContent id="BlockContent">
                <HeadBlockContent>
                  <Title className="title__low">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: home.acf.primer_seccion.titulo_de_parrafo,
                      }}
                    ></span>
                  </Title>
                </HeadBlockContent>
                <BodyContent>
                  {home.acf.primer_seccion.contenido_de_parrafo}
                </BodyContent>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href={home.acf.primer_seccion.enlace_parrafo.url}
                >
                  {home.acf.primer_seccion.enlace_parrafo.title}
                </AnchorLink>
              </BlockContent>
            </div>
            <ContainerServices />
          </ContentSection>

          <ContentSection className="padding__bottom__none padding__top__none">
            <div className="container__fullWidth">
              <NameSection>
                <IconWaveQuote className="big" />
                <TitleSection
                  textUp={home.acf.segunda_seccion.titulo_de_la_seccion.slice(0,3)}
                  textDown={home.acf.segunda_seccion.titulo_de_la_seccion.slice(3)}
                />
              </NameSection>
            </div>
            <div className="container__left imagen__content">
              <div className="parallax__none fadeObserve slideOutRight">
                <Parallax
                  bgImage={home.acf.imagen_seccion.url}
                  strength={150}
                  style={{ height: 300 }}
                ></Parallax>
              </div>
              <div className="footer__image">
                <p className="title__project">
                  {home.acf.seccion_con_proyecto.nombre_proyecto}
                </p>
                <p className="category__project">
                  {home.acf.seccion_con_proyecto.categoria_proyecto[0].name +
                    " - " +
                    "2014"}
                </p>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href={home.acf.seccion_con_proyecto.enlace_proyecto.url}
                >
                  {home.acf.seccion_con_proyecto.enlace_proyecto.title}
                </AnchorLink>
              </div>
            </div>
            <div className="container__right">
              <BlockContent id="BlockContent">
                <HeadBlockContent>
                  <Title className="title__low">
                    {home.acf.segunda_seccion.titulo_de_parrafo}
                  </Title>
                </HeadBlockContent>
                <BodyContent>
                  {home.acf.segunda_seccion.contenido_de_parrafo}
                </BodyContent>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href={home.acf.segunda_seccion.enlace_parrafo.url}
                >
                  {home.acf.segunda_seccion.enlace_parrafo.title}
                </AnchorLink>
              </BlockContent>
            </div>
          </ContentSection>

          <ContentSection className="padding__bottom__none">
            <div className="container__fullWidth">
              <NameSection className="textUpImg">
                <IconWaveQuote className="big" />
                <TitleSection
                  textUp={home.acf.ultima_seccion.titulo_de_la_seccion.split(" ")[0]}
                  textDown={home.acf.ultima_seccion.titulo_de_la_seccion.split(" ")[1]}
                />
              </NameSection>
            </div>
            <ContainerImage>
              <div className="image container__fullWidth fadeObserve slideDown">
                <Parallax
                  bgImage={
                    home.acf.ultima_seccion.imagen_de_la_seccion.url
                  }
                  strength={150}
                  style={{ height: 300 }}
                ></Parallax>
              </div>
            </ContainerImage>

            <div className="container__fullWidth padding__top__80">
              <BlockContent id="BlockContent">
                <HeadBlockContent className="column__left">
                  <Title className="title__low">
                    {home.acf.ultima_seccion.titulo_de_parrafo}
                  </Title>
                </HeadBlockContent>
                <BodyContent className="column__center">
                  {home.acf.ultima_seccion.contenido_de_parrafo}
                </BodyContent>
                <BodyContent className="column__right">
                  {home.acf.ultima_seccion.contenido_de_parrafo}
                  <span>
                    <AnchorLink
                      className="text__italic link__blockContent"
                      href={home.acf.ultima_seccion.enlace_parrafo.title}
                    >
                      {home.acf.ultima_seccion.enlace_parrafo.title}
                    </AnchorLink>
                  </span>
                </BodyContent>
              </BlockContent>
            </div>
          </ContentSection>
        </ContainerContent>
      )}
    </>
  );
};
export default connect(Home);
