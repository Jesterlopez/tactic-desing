import React from "react";
import { connect } from "frontity";
import { IconWaveQuote } from "../../components/Icons";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
import Title from "../../components/Titles";
import ItemTimeline from "../../components/ItemTimeline";
import ServiceItem from "../../components/ServiceItem";
import AnchorLink from "../../components/AnchorLink";
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
} from "./styles";

const Nosotros = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <ContainerHeader style={{ background: "#f8f8f8" }}>
        <ColorYellow></ColorYellow>
        <TitleHeader textUp="Val" textDown="ues" />
        <HeaderContent>
          <p className="lemotiv font__italic">Tactic Center</p>
          <span> Conoce nuestro equipo </span>
          <span>y</span>
          <span> nuestros objetivos.</span>
        </HeaderContent>
      </ContainerHeader>
      <ContainerSection className="margin__top__negative">
        <ContainerLeft>
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent>
              <Title className="titles__about">
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
              <Title className="titles__about">
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
            style={{ objectFit: "contain" }}
            src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/philo/brique-wokine.svg"
          />
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__top__none line__timeline">
        <ul className="list__timeline">
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
        <ContainerLeft className="right">
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent>
              <Title>
                <span>
                  Something strong
                  <span className="text__italic"> between us.</span>
                </span>
              </Title>
            </HeadBlockContent>
            <BodyContent>
              <p className="text__italic content__italic">
                We don't have a standard offer. Because every project is unique,
                rest assured that every one of our ideas is too.
              </p>
              <p>
                hroughout your project, we act as an extension of your team. And
                because we're on the same team, we do everything with success,
                transparency and quality in mind.
              </p>
            </BodyContent>
            {/* <AnchorLink
						className="text__italic link__blockContent"
						href="#"
					></AnchorLink> */}
          </BlockContent>
        </ContainerLeft>
        <ContainerRight className="right">
          <ContainerImage>
            <img src="https://tactic-center.com/wp-content/uploads/2018/05/Misión-y-Visión-Nosotros-min.jpg" />
          </ContainerImage>
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__none H100vh">
        <ContainerLeft className="withImg" style={{ width: "45%" }}>
          <ContainerImageBig>
            <img src="https://tactic-center.com/wp-content/uploads/2018/04/Header-Nosotros-1.jpg" />
          </ContainerImageBig>
        </ContainerLeft>
        <ContainerRight className="text__large order__2">
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent>
              <Title className="center__section title__mobile">
                <span className="fontSize__titleContentBig">
                  User friendly inside,
                  <span className="text__italic fontSize__titleContentBig font__weight__400">
                    innovation all around.
                  </span>
                </span>
              </Title>
            </HeadBlockContent>
            <BodyContent style={{ order: 1 }}>
              <p className="text__italic content__italic">
                Lots of great ideas are ruined by a lack of ambition, but also
                by a lack of distinction between what is beautiful and what is
                useful.
              </p>
              <p>
                This is why we take plenty of time to study your targets before
                suggesting an optimized, realistic user experience. We apply our
                highest standards to every aspect of our process in order to
                make your project an outstanding experience.
              </p>
            </BodyContent>
          </BlockContent>
        </ContainerRight>
      </ContainerSection>
      <ContainerSection className="padding__top" style={{ paddingBottom: 0 }}>
        <ContainerLeft className="margin__bottom__100">
          <BlockContent id="BlockContent" className="order__1 padding__left">
            <HeadBlockContent style={{ paddingLeft: "27%" }}>
              <Title className="title__custom title__mobile">
                <span className="text__italic">Aesthetic </span>
                and
                <span className="text__italic"> technical </span>
                imperatives.
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
                Above and beyond project success, we have another goal: to be
                proud.
              </strong>
            </p>
            <p>
              Since 2004, we've won nearly a dozen national and international
              awards. These awards mean something. They're the guarantee that we
              always give the best of ourselves to each project, that we always
              keep our ambitions and standards high, and that each of our
              productions is on the leading edge of modernism and excellent
              taste.
            </p>
          </BodyContent>
        </ContainerRight>
        <ContainerFullWidth style={{ height: "350px" }} className="order__2">
          <img src="https://tactic-center.com/wp-content/uploads/2018/04/Header-Nosotros-1.jpg" />{" "}
        </ContainerFullWidth>
      </ContainerSection>
      <ContainerSection className="container__services">
        <ContainerLeft>
          <BlockContent id="BlockContent" className="padding__none">
            <HeadBlockContent style={{ paddingLeft: "27%", color: "#fff" }}>
              <Title className="title__custom title__mobile ">
                <span>What we</span>
                <span>know how to do,</span>
                <span className="text__italic"> well.. </span>
              </Title>
            </HeadBlockContent>
          </BlockContent>
        </ContainerLeft>
        <ContainerRight className="order__2">
          <Services style={{ paddingTop: 0 }}>
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
              <ServiceName>Inbound Marketing</ServiceName>
              <ListService>
                <ListItem>Atraer</ListItem>
                <ListItem>Convertir</ListItem>
                <ListItem>Cerrar</ListItem>
                <ListItem>Fidelizar</ListItem>
              </ListService>
            </ServiceItem>
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
              <ServiceName>Inbound Marketing</ServiceName>
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
        className="padding__bottom__footer"
        style={{
          background: "var(--color-blue)",
          justifyContent: "space-between",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <ContainerLeft>
          <BlockContent id="BlockContent" className="padding__left">
            <HeadBlockContent
              style={{ paddingLeft: "27%", color: "#fff", fontSize: "2rem" }}
            >
              <Title className="title__customTwo">
                We work the same way for
                <span className="text__italic"> startups.</span>
              </Title>
            </HeadBlockContent>
          </BlockContent>
        </ContainerLeft>
        <ContainerRight
          className="order__2 width__100 padding__left__10"
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
            }}
          >
            <p style={{ marginTop: "-30px", marginBottom: "30px" }}>
              Our way of working, our philosophy and our values: we also put
              them at the service of startups..
            </p>
            <AnchorLink className="text__italic link__blockContent" href="#">
              See more
            </AnchorLink>
          </BodyContent>
        </ContainerRight>
      </ContainerSection>
    </>
  );
};

export default connect(Nosotros);
