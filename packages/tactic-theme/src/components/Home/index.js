import React, { useRef, useState, useEffect } from "react";
import { connect } from "frontity";
import NameSection from "../NameSection";
import { IconWaveQuote } from "../Icons";
import BlockContent from "../BlockContent";
import Title from "../Titles";
import AnchorLink from "../AnchorLink";
// import Media from "../Media";
import ImgParallax from "../ImgParallax";
// import { motion, useAnimation } from "framer-motion";
import { Parallax, Background } from "react-parallax";
// import { InView, useInView } from "react-intersection-observer";
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
  ContainerImage,
} from "./styles";
const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const sourceData = state.source;
  const id = data.id;
  const home = state.source.page[51];

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
    return () => {
      window.removeEventListener("scroll", scrollAnimations);
    };
  }, []);

  const scrollAnimations = () => {
    const containerHeader = document.getElementById("header");
    // const Hello = document.getElementById("hello");
    const CHello = document.getElementById("containerHello");

    const Paragraph = document.getElementById("paragraph");
    const ScrollDown = document.querySelector("#scrollDown");
    const ScrollDown2 = document.querySelector("#scrollDown2");

    // let scrollPosition = window.pageYOffset;
    // const ElementParallax = document.querySelector("#paragraph");

    const Content = document.querySelector("#content");

    if (Content.getBoundingClientRect().bottom <= 700) {
      ScrollDown2.style.zIndex = "-1";
    } else {
      ScrollDown2.style.zIndex = "10";
    }

    if (containerHeader.getBoundingClientRect().top < 0) {
      containerHeader.classList.add("expanded__height");
      Paragraph.style.opacity = 1;
      ScrollDown.classList.add("animation");
      ScrollDown.classList.add("fadeOut");

      ScrollDown.classList.remove("fadeInScroll");
      ScrollDown2.classList.add("fadeInScroll");
    } else {
      ScrollDown.classList.add("fadeOut");
      ScrollDown2.classList.remove("fadeInScroll");

      ScrollDown.classList.remove("fadeOut");
      ScrollDown.classList.add("fadeInScroll");
      containerHeader.classList.remove("expanded__height");
    }
    if (Content.getBoundingClientRect().top < 0) {
      CHello.style.zIndex = "-1";
      CHello.style.opacity = 0;
      Paragraph.style.opacity = 0;
      Paragraph.style.zIndex = -1;
    } else {
      Paragraph.style.zIndex = 1;
      CHello.style.zIndex = 0;
      CHello.style.opacity = 1;
    }
  };
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
              <div className="parallax__none fadeObserve slideOutRight">
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

          <ContentSection className="padding__bottom__none">
            <div className="container__fullWidth">
              <NameSection className="textUpImg">
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />

                <TitleSection
                  textUp={
                    home.acf.ultima_seccion.titulo_de_la_seccion.split(" ")[0]
                  }
                  textDown={
                    home.acf.ultima_seccion.titulo_de_la_seccion.split(" ")[1]
                  }
                />
              </NameSection>
            </div>
            <ContainerImage>
              <div className="image container__fullWidth fadeObserve slideDown">
                <Parallax
                  bgImage={
                    "https://tactic-center.com/wp-content/uploads/2018/05/Suscribite-Home-min-1.jpg"
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
                      href="#"
                    >
                      {home.acf.ultima_seccion.enlace_parrafo}
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
