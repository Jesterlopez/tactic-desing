import React, { useRef, useEffect, useCallback } from "react";
import { connect } from "frontity";
import { IconWaveQuote } from "../../components/Icons";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
import Title from "../../components/Titles";
import ItemTimeline from "../../components/ItemTimeline";
import ServiceItem from "../../components/ServiceItem";
import AnchorLink from "../../components/AnchorLink";
import Client from "../../components/Client";

import gsap from "gsap";
import { Parallax } from "react-parallax";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  ContainerHeader,
  ColorYellow,
  HeaderContent,
  ContainerSection,
  HeadBlockContent,
  BodyContent,
  ContainerRight,
  ContainerLeft,
  ContainerFullWidth,
  Services,
  ServiceName,
  ListItem,
  ListService,
  ContainerImage,
  ContainerImageBig,
  ContainerClients,
  ContainerClient,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);
const Nosotros = ({ state }) => {
  const data = state.source.get(state.router.link);
  const containerYellowRef = useRef(null);
  const containerLeftRef = useRef(null);
  const containerLeftRef2 = useRef(null);

  const blockTwoRef = useRef(null);

  const initScrollAnimation = useCallback(() => {
    gsap.to(containerYellowRef.current, {
      scrollTrigger: {
        trigger: !containerYellowRef.current,
        // start: "center 80%",
        scrub: true,
      },
      left: "100%",
      duration: 0.8,
      stagger: {
        from: "center",
        amount: 0.9,
      },
    });
    gsap.to(blockTwoRef.current, {
      scrollTrigger: {
        trigger: !blockTwoRef.current,
        scrub: true,
      },
      translateY: "200%",
      duration: 0.2,
      stagger: {
        from: "center",
        amount: 0.1,
      },
    });
    gsap.to(containerLeftRef.current, {
      scrollTrigger: {
        trigger: !containerLeftRef.current,
        // start: "center 80%",
        scrub: true,
      },
      translateY: "-50%",
      duration: 0.8,
      stagger: {
        from: "center",
        amount: 0.9,
      },
    });
    gsap.to(containerLeftRef2.current, {
      scrollTrigger: {
        trigger: !containerLeftRef2.current,
        // start: "center 80%",
        scrub: true,
      },
      translateY: "-40%",
      duration: 0.8,
      stagger: {
        from: "center",
        amount: 0.9,
      },
    });
  }, []);

  useEffect(() => {
    initScrollAnimation();
    // const animation = document.querySelectorAll(".fadeInUp");
    // animation.forEach((e, i) => {
    //   e.classList.add("animation");
    //   e.style.animationDelay = `calc(${i + 1}00ms)`;
    // });
  }, [initScrollAnimation]);

  return (
    <>
      <ContainerHeader style={{ background: "#f8f8f8" }}>
        <ColorYellow ref={containerYellowRef}></ColorYellow>
        <TitleHeader
          className="fadeInUp animation"
          textUp="Noso"
          textDown="tros"
        />
        <HeaderContent>
          <p className="lemotiv fadeInUp animation font__italic">
            Tactic Center
          </p>
          <div>
            <span className="fadeInUp animation">Conoce nuestro equipo</span>
          </div>
          <div>
            <span className="fadeInUp animation" style={{ color: "#000" }}>
              y nuestros objetivos.
            </span>
          </div>
        </HeaderContent>
      </ContainerHeader>
      <ContainerSection className="margin__top__negative">
        <ContainerLeft
          ref={containerLeftRef}
          style={{ transform: "translateY(40%)" }}
        >
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent>
              <Title className="titles__about dark">
                <span>
                  Nuestra misión
                  {/* <span className="text__italic"> between us.</span> */}
                </span>
              </Title>
            </HeadBlockContent>
            <BodyContent>
              <p>
                Poner a disposición de nuestros clientes, tácticas y
                herramientas tecnológicas, que garanticen resultados medibles de
                indicadores claves de desempeño.
              </p>
            </BodyContent>
            <HeadBlockContent>
              <Title className="titles__about dark">
                <span>
                  Nuestra visión
                  {/* <span className="text__italic"> between us.</span> */}
                </span>
              </Title>
            </HeadBlockContent>
            <BodyContent>
              <p>
                Ser reconocidos como una agencia de Inbound Marketing y de
                Optimización de Procesos, que realmente contribuya al alcance de
                los objetivos requeridos por nuestros clientes.
              </p>
            </BodyContent>
          </BlockContent>
        </ContainerLeft>

        <ContainerRight className="d__none__mobile">
          <img
            className="blockOne"
            style={{ objectFit: "contain" }}
            src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/philo/brique-partenaire.svg"
          />

          <img
            className="blockTwo"
            ref={blockTwoRef}
            style={{ objectFit: "contain" }}
            src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/philo/brique-wokine.svg"
          />
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__top__none line__timeline">
        <ul className="list__timeline fadeInUp fadeObserve">
          <li className="timelineItem padding__mobile">
            <ItemTimeline
              textUp="Relaciones"
              textDown="estratégicas"
              content="Cumplir con las metas de nuestros clientes al desarrollar relaciones que complementen nuestro servicio."
            />
          </li>

          <li className="timelineItem padding__mobile">
            <ItemTimeline
              textUp="Estrategias"
              textDown="con Visión"
              content="Mantener la autenticidad en las propuestas planteadas a nuestros clientes y en el desarrollo de nuestra relación profesional."
            />
          </li>

          <li className="timelineItem padding__mobile">
            <ItemTimeline
              textUp="Propuestas"
              textDown="aterrizadas"
              content="Ofrecer propuestas de Servicios ajustadas a los requerimientos de nuestros clientes y a su industria."
            />
          </li>
        </ul>
      </ContainerSection>
      <ContainerSection>
        <ContainerLeft
          ref={containerLeftRef2}
          style={{ transform: "translateY(70%)" }}
          className="right"
        >
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent>
              <Title className="dark">
                <span>
                  Innovación
                  <span className="text__italic"> Innovación</span>
                </span>
              </Title>
            </HeadBlockContent>
            <BodyContent>
              <p className="text__italic content__italic">
                La innovación constante es el principal diferenciador en nuestra
                oferta de servicios y eje central de nuestra dinámica de
                trabajo.
              </p>
              <p>
                La innovación constante es el principal diferenciador en nuestra
                oferta de servicios y eje central de nuestra dinámica de
                trabajo.
              </p>
            </BodyContent>
            {/* <AnchorLink
						className="text__italic link__blockContent"
						href="#"
					></AnchorLink> */}
          </BlockContent>
        </ContainerLeft>
        <ContainerRight className="right">
          <ContainerImage
          // className="fadeObserve slideLeft"
          >
            <Parallax
              bgImage="https://tactic-center.com/wp-content/uploads/2018/05/Misión-y-Visión-Nosotros-min.jpg"
              strength={200}
              style={{ height: "100%" }}
            ></Parallax>
            {/* <img src="https://tactic-center.com/wp-content/uploads/2018/05/Misión-y-Visión-Nosotros-min.jpg" /> */}
          </ContainerImage>
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__none H100vh H90vh">
        <ContainerLeft className="withImg" style={{ width: "45%" }}>
          <ContainerImageBig className="fadeObserve fadeInLeft">
            <img src="https://tactic-center.com/wp-content/uploads/2018/04/Header-Nosotros-1.jpg" />
          </ContainerImageBig>
        </ContainerLeft>
        <Title className="center__section title__mobile">
          <span className="fontSize__titleContentBig">
            Compromiso
            <span className="text__italic fontSize__titleContentBig font__weight__400">
              Compromiso
            </span>
          </span>
        </Title>
        <ContainerRight className="text__large order__2">
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent></HeadBlockContent>
            <BodyContent style={{ order: 1 }}>
              <p className="text__italic content__italic">
                Estamos comprometidos a evaluar y asesorar las necesidades de
                nuestros clientes de manera exhaustiva y con total pertenencia a
                sus marcas.
              </p>
              <p>
                Estamos comprometidos a evaluar y asesorar las necesidades de
                nuestros clientes de manera exhaustiva y con total pertenencia a
                sus marcas.
              </p>
            </BodyContent>
          </BlockContent>
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__top" style={{ paddingBottom: 0 }}>
        <ContainerLeft className="margin__bottom__100">
          <BlockContent id="BlockContent" className="order__1 padding__left">
            <HeadBlockContent style={{ paddingLeft: "27%" }}>
              <Title className="title__custom title__mobile dark">
                Excelencia
                <span className="text__italic">Excelencia</span>
              </Title>
            </HeadBlockContent>
          </BlockContent>
        </ContainerLeft>
        <ContainerRight className="order__2 margin__bottom__100">
          <BodyContent
            className="padding__left__10 padding__left__20"
            style={{ width: "100%", marginRight: "20%", paddingRight: 0 }}
          >
            <p
              className="text__italic content__italic"
              style={{ marginTop: 0 }}
            >
              <strong>
                Trabajamos por ser mejores cada día, no solo por las exigencias
                del mercado, sino para cumplir con nuestro objetivo de crecer y
                llegar lejos.
              </strong>
            </p>
            <p>
              Trabajamos por ser mejores cada día, no solo por las exigencias
              del mercado, sino para cumplir con nuestro objetivo de crecer y
              llegar lejos.
            </p>
          </BodyContent>
        </ContainerRight>
        <ContainerFullWidth style={{ height: "350px" }} className="order__2 ">
          <img
            className="fadeObserve slideDown"
            src="https://tactic-center.com/wp-content/uploads/2018/04/Header-Nosotros-1.jpg"
          />
        </ContainerFullWidth>
      </ContainerSection>
      <ContainerSection className="container__services">
        <ContainerLeft>
          <BlockContent id="BlockContent" className="padding__none">
            <HeadBlockContent style={{ paddingLeft: "27%", color: "#fff" }}>
              <Title className="title__custom title__mobile ">
                <span>Objetivos Estratégicos</span>
                <span className="text__italic">Objetivos Estratégicos </span>
              </Title>
            </HeadBlockContent>
          </BlockContent>
        </ContainerLeft>
        <ContainerRight className="order__2">
          <Services style={{ paddingTop: 0 }}>
            <ServiceItem className="NoAnimation">
              <ServiceName>Propuestas aterrizadas</ServiceName>
              <ListService>
                <ListItem>Atraer</ListItem>
                <ListItem>Convertir</ListItem>
                <ListItem>Cerrar</ListItem>
                <ListItem>Fidelizar</ListItem>
              </ListService>
            </ServiceItem>
            <ServiceItem className="NoAnimation">
              <ServiceName>Estrategias con Visión</ServiceName>
              <ListService>
                <ListItem>Atraer</ListItem>
                <ListItem>Convertir</ListItem>
                <ListItem>Cerrar</ListItem>
                <ListItem>Fidelizar</ListItem>
              </ListService>
            </ServiceItem>
            <ServiceItem className="NoAnimation">
              <ServiceName>Relaciones estratégicas</ServiceName>
              <ListService>
                <ListItem>Atraer</ListItem>
                <ListItem>Convertir</ListItem>
                <ListItem>Cerrar</ListItem>
                <ListItem>Fidelizar</ListItem>
              </ListService>
            </ServiceItem>
            <ServiceItem className="NoAnimation">
              <ServiceName>Autenticidad</ServiceName>
              <ListService>
                <ListItem>Atraer</ListItem>
                <ListItem>Convertir</ListItem>
                <ListItem>Cerrar</ListItem>
                <ListItem>Fidelizar</ListItem>
              </ListService>
            </ServiceItem>
          </Services>
        </ContainerRight>
      </ContainerSection>
      <ContainerSection
        style={{
          background: "var(--color-blue)",
          justifyContent: "space-between",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <ContainerLeft>
          <BlockContent
            id="BlockContent"
            className="padding__left fadeObserve fadeInUp"
          >
            <HeadBlockContent
              style={{ paddingLeft: "27%", color: "#fff", fontSize: "2rem" }}
            >
              <Title className="title__customTwo">
                ¡Consolidá tu marca con los
                <span className="text__italic"> expertos!</span>
              </Title>
            </HeadBlockContent>
          </BlockContent>
        </ContainerLeft>
        <ContainerRight
          className="order__2 width__100 padding__left__10 fadeInUp fadeObserve "
          style={{
            color: "#fff",
            flexWrap: "wrap",
            width: "50%",
            justifyContent: "left",
          }}
        >
          <BodyContent
            style={{
              width: "100%",
              marginRight: "44%",
              paddingRight: 0,
              color: "#fff",
              marginBottom: 0,
            }}
          >
            <p style={{ marginTop: "-30px", marginBottom: "30px" }}>
              Las empresas deben asesorarse correctamente para lograr una
              valiosa ventaja competitiva, puesto que los competidores están en
              todas partes.
            </p>
            <AnchorLink
              className="text__italic link__blockContent white"
              href="#"
            >
              Ver más
            </AnchorLink>
          </BodyContent>
        </ContainerRight>
      </ContainerSection>
      <ContainerClients>
        <BlockContent id="BlockContent" className="padding__left">
          <HeadBlockContent className="fadeInUp fadeObserve animate">
            <Title className="title__customTwo">
              Nos clients
              <span className="text__italic">depuis 2004</span>
            </Title>
          </HeadBlockContent>
        </BlockContent>
        <Client />
      </ContainerClients>
    </>
  );
};

export default connect(Nosotros);
