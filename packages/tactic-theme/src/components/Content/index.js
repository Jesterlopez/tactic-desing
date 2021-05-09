import React from "react";
import { connect } from "frontity";
import NameSection from "../NameSection";
import { IconWaveQuote } from "../Icons";
import BlockContent from "../BlockContent";
import Title from "../Title";
import AnchorLink from "../AnchorLink";
import ServiceItem from "../ServiceItem";

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
const Content = () => {
  return (
    <>
      <ContainerContent id="content">
        <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg" />
        <ContentSection className="padding__bottom__none">
          <div className="container__fullWidth">
            <NameSection>
              {/* recibe la clase big para cambiar el estilo depende la situacion | */}
              <IconWaveQuote className="big" />
              <span>ser</span>
              <span>vicios</span>
            </NameSection>
          </div>
          <div className="container__left middle">
            <BlockContent id="BlockContent">
              <HeadBlockContent>
                <Title>An</Title>
                <Title className="text__italic">overview</Title>
                <Title>of your digital strategy.</Title>
              </HeadBlockContent>
              <BodyContent>
                En Tactic Center presentamos una oferta de servicio de Inbound
                Marketing y optimización de procesos, mediante la utilización de
                herramientas tecnológicas ajustadas al giro de negocio de
                nuestros clientes
              </BodyContent>
              <AnchorLink className="text__italic link__blockContent" href="#">
                Our Values
              </AnchorLink>
            </BlockContent>
          </div>
          <div className="container__right">
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
            <div>
              <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg" />
            </div>
            <div className="footer__image">
              <p className="title__project">Decathlon recruitment.</p>
              <p className="category__project">Web & mobile - 2014</p>
              <AnchorLink className="text__italic link__blockContent" href="#">
                Ir a Proyectos
              </AnchorLink>
            </div>
          </div>
          <div className="container__right">
            <BlockContent id="BlockContent">
              <HeadBlockContent>
                <Title>En</Title>
                <Title className="text__italic">Tactic</Title>
                <Title>Center.</Title>
              </HeadBlockContent>
              <BodyContent>
                Nos tomamos en serio el diseño de una comunicación y estrategia
                adaptada a las necesidades de tu marca, que te acercarán a tu
                objetivo de convertirte en el líder del mercado.
              </BodyContent>
              <AnchorLink className="text__italic link__blockContent" href="#">
                Proyectos
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
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/wokine-startup-factory-retina.jpg" />
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
                will turn your bright idea into a real prototype, and then grow
                it into a profitable business.
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
    </>
  );
};
export default connect(Content);
