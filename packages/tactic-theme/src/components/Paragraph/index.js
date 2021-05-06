import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import { IconWaveQuote } from "../Icons";
// import { AnimeIcon, FadeRight } from "../Styles/animations";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContainerParagraph,
  Quote,
  ParagraphContent,
  RefQuote,
} from "./styles";

const Paragraph = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ContainerParagraph id="paragraph">
        <Quote>
          <IconWaveQuote>
            <div data-aos="animeIcon" data-aos-offset="210"></div>
          </IconWaveQuote>
          <RefQuote
            className="font__italic__paragraph"
            data-aos="fade-right"
            data-aos-offset="220"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            Depuis 2004.
          </RefQuote>
        </Quote>
        <ParagraphContent>
          <div className="text__primary text__dark">
            <strong data-aos="fade-up" data-aos-offset="300">
              Wokine est une agence digitale globale
            </strong>
          </div>
          <div className="text__secundary text__white">
            <span>
              <strong
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
              >
                et un startup studio, alliant innovation,
              </strong>
            </span>
            <span>
              <strong
                data-aos="fade-up"
                data-aos-offset="190"
                data-aos-delay="150"
              >
                modernisme et esthétique.
              </strong>
            </span>
          </div>
        </ParagraphContent>
      </ContainerParagraph>
    </>
  );
};

export default connect(Paragraph);
