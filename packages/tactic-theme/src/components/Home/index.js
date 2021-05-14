import React, { useRef, useState, useEffect } from "react";
import { connect } from "frontity";
import NameSection from "../NameSection";
import { IconWaveQuote } from "../Icons";
import BlockContent from "../BlockContent";
import Title from "../Title";
import AnchorLink from "../AnchorLink";
import ServiceItem from "../ServiceItem";
import Media from "../Media";
import { motion, useAnimation } from "framer-motion";
import { Parallax, Background } from "react-parallax";
import { InView, useInView } from "react-intersection-observer";

import {
  ContainerContent,
  ContentSection,
  HeadBlockContent,
  BodyContent,
  ContainerServices,
  ListService,
  ListItem,
  ServiceName,
} from "./styles";
const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const sourceData = state.source;
  const id = data.id;
  const home = state.source.page[51];

  const [translate, setTranslate] = useState(0);
  const parallaxRef = useRef();
  const controls = useAnimation();
  // const { ref, fadeInUp, inView } = useInView();
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 50,
  });

  useEffect(() => {
    const ParralaxScroll = () => {
      let scrollPosition = window.pageYOffset;
      const llaxRef = parallaxRef.current;
      const { y } = llaxRef.getBoundingClientRect();

      // console.log(y);
      const positionScroll = () => {
        if (y <= 800) {
          setTranslate(scrollPosition / 150);
        } else {
          setTranslate(0);
        }
      };
      setTranslate(positionScroll);
    };

    window.addEventListener("scroll", ParralaxScroll);
    return () => {
      window.removeEventListener("scroll", ParralaxScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
    return controls.stop;
  }, [controls, inView]);

  const AnimationLeft = {
    hidden: { x: 600, opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const AnimationInUp = {
    hidden: { y: 100, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      {typeof home === "undefined" ? null : (
        <ContainerContent id="content">
          <div className="container__fullWidth">
            <Media idImg={home.featured_media} element="home" />
          </div>
          <ContentSection className="padding__bottom__none" id="section">
            <div className="container__fullWidth">
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />
                <div style={{ height: "90", overflow: "hidden" }}>
                  <InView>
                    {({ ref }) => (
                      <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={AnimationInUp}
                        ref={ref}
                      >
                        <span>
                          {home.acf.primer_seccion.titulo_de_la_seccion.slice(
                            0,
                            3
                          )}
                        </span>
                      </motion.div>
                    )}
                  </InView>
                </div>
                <div style={{ height: "90", overflow: "hidden" }}>
                  <InView>
                    {({ ref }) => (
                      <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={AnimationInUp}
                        ref={ref}
                      >
                        <span>
                          {home.acf.primer_seccion.titulo_de_la_seccion.slice(
                            3,
                            -1
                          )}
                        </span>
                      </motion.div>
                    )}
                  </InView>
                </div>
              </NameSection>
            </div>
            <div className="container__left middle">
              <BlockContent id="BlockContent">
                <HeadBlockContent>
                  <Title>
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
                  </Title>
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

            <motion.div
              className="Box container__right"
              initial="hidden"
              animate={controls}
              variants={AnimationLeft}
              ref={ref}
            >
              <div
                id="parallax"
                ref={parallaxRef}
                style={{ transform: `translate(0 ,-${translate}%)` }}
              >
                <ContainerServices className="container__services">
                  <ServiceItem>
                    <ServiceName>Inbound Marketing</ServiceName>
                    <ListService>
                      <ListItem>Atraer</ListItem>
                      <ListItem>Convertir</ListItem>
                      <ListItem>Cerrar</ListItem>
                      <ListItem>Fidelizar</ListItem>
                    </ListService>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceName>Integración de Tecnologías</ServiceName>
                    <ListService>
                      <ListItem>Optimización de Procesos y ERP’s</ListItem>
                      <ListItem>Recursos Humanos y Manejos de tiempos</ListItem>
                      <ListItem>Colaboración y Productividad</ListItem>
                      <ListItem>Automatización de Marketing y Ventas</ListItem>
                      <ListItem>Administración de TI y Seguridad</ListItem>
                      <ListItem>Comercio Electrónico</ListItem>
                    </ListService>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceName>Marketing Digital</ServiceName>
                    <ListService>
                      <ListItem>Administración de Redes Sociales</ListItem>
                      <ListItem>Administración de Contenido</ListItem>
                    </ListService>
                  </ServiceItem>
                  <ServiceItem>
                    <ServiceName>Mercadeo Convencional</ServiceName>
                    <ListService>
                      <ListItem>Estrategias de medios masivos (ATL)</ListItem>
                      <ListItem>Estrategias de relaciones públicas</ListItem>
                      <ListItem>Estrategias de activaciones (BTL)</ListItem>
                      <ListItem>Diseño Gráfico</ListItem>
                    </ListService>
                  </ServiceItem>
                </ContainerServices>
              </div>
            </motion.div>
          </ContentSection>

          <ContentSection className="padding__bottom__none">
            <div className="container__fullWidth">
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />
                <div style={{ height: "90", overflow: "hidden" }}>
                  <InView>
                    {({ ref }) => (
                      <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={AnimationInUp}
                        ref={ref}
                      >
                        <span>c</span>
                      </motion.div>
                    )}
                  </InView>
                </div>
                <div style={{ height: "90", overflow: "hidden" }}>
                  <InView>
                    {({ ref }) => (
                      <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={AnimationInUp}
                        ref={ref}
                      >
                        <span>rea</span>
                      </motion.div>
                    )}
                  </InView>
                </div>
                {/* <motion.div
                    className="Box"
                    initial="hidden"
                    animate={controls}
                    variants={AnimationInUp}
                    ref={ref1}
                  >
                    <span>c</span>
                  </motion.div>
                </div>
                <div style={{ height: "90", overflow: "hidden" }}>
                  <motion.div
                    className="Box"
                    initial="hidden"
                    animate={controls}
                    variants={AnimationInUp}
                    ref={ref1}
                  >
                    <span>rea</span>
                  </motion.div> */}
              </NameSection>
            </div>
            <div className="container__left imagen__content">
              <div className="thumbnail__medium">
                <img
                  src={home.acf.seccion_imagen_y_texto.imagen.sizes.medium}
                />
              </div>
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
          </ContentSection>
          <ContentSection className="padding__bottom__none">
            <div className="container__fullWidth">
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />
                <span>c</span>
                <span>rea</span>
              </NameSection>
            </div>
            <div className="container__left imagen__content">
              <div className="parallax__none">
                <img src={home.acf.imagen_seccion.url} />
              </div>
              <div className="footer__image">
                <p className="title__project">Decathlon recruitment.</p>
                <p className="category__project">Web & mobile - 2014</p>
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
                  <Title>
                    {home.acf.segunda_seccion.titulo_de_parrafo.split(" ")[0]}
                  </Title>
                  <Title className="text__italic">
                    {home.acf.segunda_seccion.titulo_de_parrafo.split(" ")[1]}
                  </Title>
                  <Title>
                    {home.acf.segunda_seccion.titulo_de_parrafo
                      .split(" ")
                      .slice(2)
                      .join(" ")}
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
              <NameSection>
                {/* recibe la clase big para cambiar el estilo depende la situacion | */}
                <IconWaveQuote className="big" />
                <span>id</span>
                <span>eas</span>
              </NameSection>
            </div>
            <div className="image container__fullWidth">
              <Parallax
                bgImage={
                  "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/wokine-startup-factory-retina.jpg"
                }
                strength={100}
                style={{ height: 300 }}
              ></Parallax>
            </div>

            <div className="container__fullWidth padding__top__80">
              <BlockContent id="BlockContent">
                <HeadBlockContent className="column__left">
                  <Title>A studio dedicated to</Title>
                  <Title className="text__italic">startups.</Title>
                </HeadBlockContent>
                <BodyContent className="column__center">
                  Have you dreamed up an innovative new digital platform, a
                  revolutionary mobile application, a life-enhancing chatbot, or
                  do you just want to change the world? Let's do it together.
                </BodyContent>
                <BodyContent className="column__right">
                  We're here to make your dreams come true. Our support method
                  will turn your bright idea into a real prototype, and then
                  grow it into a profitable business.
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
