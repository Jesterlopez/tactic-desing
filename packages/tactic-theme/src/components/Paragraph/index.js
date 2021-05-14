import React, { useEffect } from "react";
import { connect } from "frontity";
import { IconWaveQuote } from "../Icons";

import {
  ContainerParagraph,
  Quote,
  ParagraphContent,
  RefQuote,
} from "./styles";

const Paragraph = () => {
  return (
    <>
      <ContainerParagraph id="paragraph">
        <Quote>
          <IconWaveQuote>
            <div className="slideInRight"></div>
          </IconWaveQuote>
          <RefQuote className="font__italic__paragraph fadeInLeft">
            Tactic 2021.
          </RefQuote>
        </Quote>
        <ParagraphContent>
          <div className="text__primary text__dark">
            <strong className="fadeInUp scrollAnime">Las oportunidades</strong>
          </div>
          <div className="text__secundary text__white">
            <span>
              <strong className="fadeInUp scrollAnime">no pasan,</strong>
            </span>
            <span>
              <strong className="fadeInUp scrollAnime">¡Uno las crea!</strong>
            </span>
          </div>
        </ParagraphContent>
      </ContainerParagraph>
    </>
  );
};

export default connect(Paragraph);
