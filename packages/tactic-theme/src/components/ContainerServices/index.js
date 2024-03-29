import React, { useRef, useEffect, useState, useCallback } from "react";
import { connect } from "frontity";
import { useWindowSize } from "react-use";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServiceItem from "../ServiceItem";
import {
  ContainerService,
  ListService,
  ListItem,
  ServiceName,
  ContainerParallax,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const ContainerServices = ({ state }) => {
  const containerServiceRef = useRef(null);

  const initScrollAnimation = useCallback(() => {
    gsap.to(containerServiceRef.current, {
      scrollTrigger: {
        trigger: !containerServiceRef.current,
        start: "center 80%",
        scrub: true,
      },
      yPercent: -100,
      duration: 0.8,
      stagger: {
        from: "center",
        amount: 0.9,
      },
    });
  }, []);

  useEffect(() => {
    initScrollAnimation();
  }, [initScrollAnimation]);

  return (
    <ContainerParallax
      id="parallax"
      className="Box container__right"
      ref={containerServiceRef}
    >
      <ContainerService className="container__services fadeObserve slideLeft">
        <ServiceItem className="NoAnimation">
          <ServiceName>Inbound Marketing</ServiceName>
          <ListService>
            <ListItem>Atraer</ListItem>
            <ListItem>Convertir</ListItem>
            <ListItem>Cerrar</ListItem>
            <ListItem>Fidelizar</ListItem>
          </ListService>
        </ServiceItem>
        <ServiceItem className="NoAnimation">
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
        <ServiceItem className="NoAnimation">
          <ServiceName>Marketing Digital</ServiceName>
          <ListService>
            <ListItem>Administración de Redes Sociales</ListItem>
            <ListItem>Administración de Contenido</ListItem>
          </ListService>
        </ServiceItem>
        <ServiceItem className="NoAnimation">
          <ServiceName>Mercadeo Convencional</ServiceName>
          <ListService>
            <ListItem>Estrategias de medios masivos (ATL)</ListItem>
            <ListItem>Estrategias de relaciones públicas</ListItem>
            <ListItem>Estrategias de activaciones (BTL)</ListItem>
            <ListItem>Diseño Gráfico</ListItem>
          </ListService>
        </ServiceItem>
      </ContainerService>
    </ContainerParallax>
  );
};

export default connect(ContainerServices);
