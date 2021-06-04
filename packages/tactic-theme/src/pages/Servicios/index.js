import React from "react";
import { connect } from "frontity";
import TitleHeader from "../../components/TitleHeader";
import ColorHeader from "../../components/ColorHeader";
import { Parallax } from "react-parallax";
import Titles from "../../components/Titles";

import {
  HeaderContainer,
  Container,
  Title,
  Content,
  ContentParagraph,
  Section,
  ColumnLeft,
  ColumnCenter,
  ColumnRight,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  Tag,
  ContainerImgParallax,
  ContainerFullWidth,
  Support,
  ContainerImg,
  ContainerParagraph,
  Link,
  TitleItalic,
} from "./styles";
import { IconArrowRightButton, IconWaveQuote } from "../../components/Icons";

const Servicios = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <HeaderContainer>
        <ColorHeader className="animationColorHeader animation" />
        <TitleHeader fontSize="mid" textUp="serv" textDown="icios" />
        <Container>
          <Content>
            <Title>
              You have a good idea?
              <span className="text__italic">We have a good team.</span>
            </Title>
            <ContentParagraph>
              Our goal: to co-create startups with good breeding and shared
              values. Without being a co-working space, an investment fund or a
              business incubator, we offer digital expertise, dedicated desks
              and access to an entrepreneur ecosystem for startups in the fields
              of communities, mobile apps, SaaS plateforms and ecommerce.
              <span>#wokineForStartup</span>
            </ContentParagraph>
          </Content>
          <img
            className="header__img"
            src="https://tactic-center.com/wp-content/uploads/2020/10/imagen-principal-1080x675.jpg"
          />
        </Container>
      </HeaderContainer>
      <Section className="dark">
        <ColumnLeft>
          <img src="https://www.wokine.com/wp-content/themes/wokine/assets/kowin.svg" />
        </ColumnLeft>
        <ColumnCenter>
          <img src=" https://www.wokine.com/wp-content/themes/wokine/assets/kowin-explain.svg" />
        </ColumnCenter>
        <ColumnRight>
          <Title className="mid">
            A progressive and
            <span className="text__italic">effective program.</span>
          </Title>
          <ContentParagraph>
            During two 3-month phases, you'll be immersed in our agency.
            Together, we'll co-build the startup via a collaborative approach:
            design thinking, brainstorming, prototyping, design and development,
            defining the economic model, using innovative technologies ...
            Everything that will grow your idea into a veritable business
            structure, credible, strong and viable.
          </ContentParagraph>
        </ColumnRight>
      </Section>
      <Section className="white">
        <ContainerFullWidth className="left">
          <Title>
            digital for equity
            <span className="text__italic">investment.</span>
          </Title>
        </ContainerFullWidth>
        <ContainerLeft>
          <Tag>1</Tag>
          <Title className="mid">Work here in total immersion</Title>
          <ContentParagraph className="colorGray">
            On a poussé les murs pour faire de la place, votre place. Plus la
            peine de prendre rendez-vous, nous partageons le même espace.
            Partageons notre quotidien.
          </ContentParagraph>
        </ContainerLeft>

        <ContainerCenter>
          <Tag>2</Tag>

          <Title className="mid">Real skills at your fingertips.</Title>
          <ContentParagraph className="colorGray">
            L'agence n'est plus un prestataire, mais un partenaire. Parce que
            les idées se multiplient quand on les partage, nous nous
            enrichissons mutuellement.
          </ContentParagraph>
        </ContainerCenter>
        <ContainerRight>
          <Tag>3</Tag>

          <Title className="mid">An entrepreneurial ecosystem.</Title>
          <ContentParagraph className="colorGray">
            Autour de Wokine gravite un écosystème riche en compétences, des
            entrepreneurs et partenaires avec les pieds sur terre et la tête
            dans les étoiles, qui répondront présent pour accompagner les
            startups dans leur développement.
          </ContentParagraph>
        </ContainerRight>
      </Section>
      <ContainerImgParallax>
        <Parallax
          bgImage={
            "https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/visuel_full.jpg"
          }
          strength={200}
          style={{ height: "100vh" }}
        ></Parallax>
      </ContainerImgParallax>
      <Section className="center">
        <ContainerFullWidth>
          <IconWaveQuote className="big" />
        </ContainerFullWidth>
        <ContainerFullWidth>
          <Title className="big">
            Startups supported by
            <span className="text__italic inline">wokine.</span>
          </Title>
        </ContainerFullWidth>
        <ContainerFullWidth>
          <Support href="#">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/startup-enfrenzy.png" />
          </Support>
          <Support href="#">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/startup-livekult.png" />
          </Support>
          <Support href="#">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/startup-socialtrends.png" />
          </Support>
          <Support href="#">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/startup-makemetry.png" />
          </Support>
          <Support href="#">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/startup-bazar.png" />
          </Support>
        </ContainerFullWidth>
      </Section>
      <Section className="padding__none heightFull">
        <ContainerImg>
          <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/ideas/visuel_full.jpg" />
        </ContainerImg>
        <ContainerParagraph>
          <TitleItalic className="text__italic">
            Tell us your story, we'll tell you ours.
          </TitleItalic>
          <Content className="padding__none custom">
            Que l'idée vienne de chez nous, ou de vous, nous avons toujours
            besoin de talents pour la faire grandir. Alors, que vous soyez
            Entrepreneurs avec la bonne idée, Manageur avec l'envie de
            développer, ou un(e) petit(e) génie du digital (dev backend, UX
            designer, créative frontend, DA, ...), venez nous voir, on vous
            attend et on offre les croissants.
          </Content>
          <Link href="#">
            Send your pitch
            <div>
              <IconArrowRightButton className="arrow__hover" />
              <IconArrowRightButton />
            </div>
          </Link>
        </ContainerParagraph>
      </Section>
    </>
  );
};

export default connect(Servicios);
