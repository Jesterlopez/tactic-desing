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
          <div>
            <NameSection>
              {/* recibe la clase big para cambiar el estilo depende la situacion | */}
              <IconWaveQuote className="big" />
              <span>dig</span>
              <span>ital</span>
            </NameSection>
          </div>
          <div>
            <BlockContent id="BlockContent">
              <HeadBlockContent>
                <Title>An</Title>
                <Title className="text__italic">overview</Title>
                <Title>of your digital strategy.</Title>
              </HeadBlockContent>
              <BodyContent>
                A key component of your transformation, your digital strategy
                requires special attention. We provide you with the support you
                need all during your project. Through regular workshops,
                brainstormings and idea sharing, we help grow your initial idea
                into a cutting-edge digital solution.
              </BodyContent>
              <AnchorLink className="text__italic link__blockContent" href="#">
                Our Values
              </AnchorLink>
            </BlockContent>
          </div>
          <div>
            <ContainerServices className="container__services">
              <ServiceItem>
                <ServiceName>Desing</ServiceName>
                <ListService>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                </ListService>
              </ServiceItem>
              <ServiceItem>
                <ServiceName>Desing</ServiceName>
                <ListService>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                </ListService>
              </ServiceItem>
              <ServiceItem>
                <ServiceName>Desing</ServiceName>
                <ListService>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                </ListService>
              </ServiceItem>
              <ServiceItem>
                <ServiceName>Desing</ServiceName>
                <ListService>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                  <ListItem>Web design</ListItem>
                </ListService>
              </ServiceItem>
            </ContainerServices>
          </div>
        </ContentSection>
        <ContentSection className="padding__bottom__none">
          <div>
            <NameSection>
              {/* recibe la clase big para cambiar el estilo depende la situacion | */}
              <IconWaveQuote className="big" />
              <span>c</span>
              <span>rea</span>
            </NameSection>
          </div>
          <div>
            <ContainerServices className="container__services"></ContainerServices>
          </div>
          <div>
            <BlockContent id="BlockContent">
              <HeadBlockContent>
                <Title className="text__italic">User-centered</Title>
                <Title>creativity.</Title>
              </HeadBlockContent>
              <BodyContent>
                Efficient and immersive user experience is the way to capture
                attention and deliver a clear message. This is why we believe,
                first and foremost, that usability serves design. And that all
                design must be elegant and innovative.
              </BodyContent>
              <AnchorLink className="text__italic link__blockContent" href="#">
                see our work
              </AnchorLink>
            </BlockContent>
          </div>
        </ContentSection>
        <ContentSection>
          <div>
            <NameSection>
              {/* recibe la clase big para cambiar el estilo depende la situacion | */}
              <IconWaveQuote className="big" />
              <span>id</span>
              <span>eas</span>
            </NameSection>
          </div>
          <div className="image">
            <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/wokine-startup-factory-retina.jpg" />
          </div>
        </ContentSection>
      </ContainerContent>
    </>
  );
};
export default connect(Content);
