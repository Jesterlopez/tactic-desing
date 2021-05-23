import React, { useRef, useState, useEffect } from "react";
import { connect } from "frontity";
import NameSection from "../NameSection";
import { IconWaveQuote } from "../Icons";
import BlockContent from "../BlockContent";
import Title from "../Titles";
import AnchorLink from "../AnchorLink";
import Media from "../Media";
import ImgParallax from "../ImgParallax";
import { motion, useAnimation } from "framer-motion";
import { Parallax, Background } from "react-parallax";
import { InView, useInView } from "react-intersection-observer";
import TitleSection from "../TitleSection";
import ContainerServices from "../ContainerServices";
import { ScrollDown2 } from "../ScrollDown";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  ContainerContent,
  ContentSection,
  HeadBlockContent,
  BodyContent,
} from "./styles";
const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const sourceData = state.source;
  const id = data.id;
  const home = state.source.page[51];

  // useEffect(() => {
  //   gsap.to("#suscribe", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "top 10%",
  //       end: "top 20%",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 0,
  //   });
  // gsap.to("#send__email", {
  //   scrollTrigger: {
  //     trigger: "#footer",
  //     start: "20px 100%",
  //     end: "bottom 100px",
  //     toggleActions: "restart pause reverse pause",
  //     scrub: true,
  //     markers: true,
  //   },
  //   y: 0,
  // });
  // gsap.to("#contact", {
  //   scrollTrigger: {
  //     trigger: "#footer",
  //     start: "top center",
  //     end: "+=300",
  //     toggleActions: "restart pause reverse pause",
  //     scrub: true,
  //     markers: true,
  //   },
  //   y: 0,
  // });
  // }, []);
  return (
    <>
      {typeof home === "undefined" ? null : (
        <ContainerContent id="content">
          <ScrollDown2 />
          <div className="container__fullWidth">
            <ImgParallax
              imgID={home.featured_media}
              // height={"100vh"}
              strength={150}
              className="img_mobile"
            ></ImgParallax>
          </div>
          <ContentSection className="padding__bottom__none" id="section">
            <div className="container__fullWidth">
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
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
                  <Title
                    className="title__low"
                    // dangerouslySetInnerHTML={{
                    //   __html: home.acf.primer_seccion.titulo_de_parrafo,
                    // }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: home.acf.primer_seccion.titulo_de_parrafo,
                      }}
                    ></span>
                  </Title>
                  {/* <Title>
                    {home.acf.primer_seccion.titulo_de_parrafo.split(" ")[0]}
                  </Title>
                  <Title className="text__italic">
                    {home.acf.primer_seccion.titulo_de_parrafo.split(" ")[1]}
                  </Title>
                  <Title>
                    {home.acf.primer_seccion.titulo_de_parrafo
                      .split(" ")
                      .slice(2)
                      .join(" ")}
                  </Title> */}
                </HeadBlockContent>
                <BodyContent>
                  {home.acf.primer_seccion.contenido_de_parrafo}
                </BodyContent>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href="#"
                >
                  {home.acf.primer_seccion.enlace_parrafo}
                </AnchorLink>
              </BlockContent>
            </div>
            <ContainerServices />
          </ContentSection>

          {/* <ContentSection className="padding__bottom__none">
            <div className="container__fullWidth">
              <NameSection> */}
          {/* recibe la clase big para cambiar el estilo depende la situacion | */}
          {/* <IconWaveQuote className="big" />
                <TitleSection textUp={"Noso"} textDown={"tros"} />
              </NameSection> */}
          {/* </div>
            <div className="container__left imagen__content">
              <img src={home.acf.seccion_imagen_y_texto.imagen.sizes.medium} />
            </div>
            <div className="container__right">
              <BlockContent id="BlockContent">
                <HeadBlockContent>
                  <Title>
                    {home.acf.seccion_imagen_y_texto.titulo_seccion}
                  </Title>
                </HeadBlockContent>
                <BodyContent>
                  {home.acf.seccion_imagen_y_texto.contenido_seccion}
                </BodyContent>
              </BlockContent>
            </div>
          </ContentSection> */}

          <ContentSection className="padding__bottom__none padding__top__none">
            <div className="container__fullWidth">
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />
                <TitleSection textUp={"proy"} textDown={"ectos"} />
              </NameSection>
            </div>
            <div className="container__left imagen__content">
              <div className="parallax__none">
                <Parallax
                  bgImage={home.acf.imagen_seccion.url}
                  strength={150}
                  style={{ height: 300 }}
                ></Parallax>
              </div>
              <div className="footer__image">
                <p className="title__project">Nombre del proyecto.</p>
                <p className="category__project">Categoria - 2014</p>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href="#"
                >
                  Ir a Proyectos
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
                  href="#"
                >
                  {home.acf.segunda_seccion.enlace_parrafo}
                </AnchorLink>
              </BlockContent>
            </div>
          </ContentSection>

          <ContentSection>
            <div className="container__fullWidth">
              <NameSection className="textUpImg">
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />

                <TitleSection
                  textUp={home.acf.seccion[0].titulo_parrafo.split(" ")[0]}
                  textDown={home.acf.seccion[0].titulo_parrafo.split(" ")[1]}
                />
              </NameSection>
            </div>
            <div className="image container__fullWidth">
              <Parallax
                bgImage={
                  "https://tactic-center.com/wp-content/uploads/2018/05/Suscribite-Home-min-1.jpg"
                }
                strength={150}
                style={{ height: 300 }}
              ></Parallax>
            </div>

            <div className="container__fullWidth padding__top__80">
              <BlockContent id="BlockContent">
                <HeadBlockContent className="column__left">
                  <Title className="title__low">
                    {home.acf.seccion[0].titulo_parrafo}
                  </Title>
                </HeadBlockContent>
                <BodyContent className="column__center">
                  {home.acf.seccion[0].contenido_parrafo}
                </BodyContent>
                <BodyContent className="column__right">
                  {home.acf.seccion[0].contenido_parrafo}

                  <span>
                    <AnchorLink
                      className="text__italic link__blockContent"
                      href="#"
                    >
                      see how
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
