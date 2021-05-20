import React, { useRef, useEffect, useState, useCallback } from "react";
import { connect } from "frontity";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "react-use";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServiceItem from "../ServiceItem";
import { InView, useInView } from "react-intersection-observer";
import { ContainerService, ListService, ListItem, ServiceName } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const ContainerServices = ({ state }) => {
  const [translate, setTranslate] = useState(0);
  const parallaxRef = useRef();
  const containerServiceRef = useRef(null);

  const windowSize = useWindowSize();
  const dataAnimation = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     containerServiceRef.current.getBoundingClientRect().height
  //   }px`;
  // };

  const smoothScroll = useCallback(() => {
    dataAnimation.curr = window.scrollY;
    dataAnimation.prev +=
      (dataAnimation.curr - dataAnimation.prev) * dataAnimation.ease;
    dataAnimation.rounded = Math.round((dataAnimation.prev * 100) / 100);
    requestAnimationFrame(() => smoothScroll());
  }, [dataAnimation]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);

  const initScrollAnimation = useCallback(() => {
    const AnimationObj = {
      duration: 0.8,
      y: -80,
      opacity: 0,
    };
    gsap.to(containerServiceRef.current, {
      scrollTrigger: {
        trigger: !containerServiceRef.current,
        start: "center 10%",
        scrub: true,
      },
      y: -250,
      duration: 0.8,
      stagger: {
        from: "center",
        amount: 0.9,
      },
    });
  }, []);
  useEffect(() => {
    // setBodyHeight()
    initScrollAnimation();
  }, [windowSize.height, initScrollAnimation]);

  const controls = useAnimation();
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

  return (
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
        // style={{ transform: `translate(0 ,-${translate - 5}%)` }}
      >
        <ContainerService
          className="container__services"
          ref={containerServiceRef}
        >
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
        </ContainerService>
      </div>
    </motion.div>
  );
};

export default connect(ContainerServices);
