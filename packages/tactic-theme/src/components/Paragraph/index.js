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
  useEffect(() => {
    // if (document.readyState === "complete") {
    window.addEventListener("scroll", scrollAnimation);
    // }

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  const scrollAnimation = () => {
    const containerHeader = document.getElementById("header");

    const Paragraph = document.getElementById("paragraph");

    const fadeInUp = document.querySelectorAll(".scrollAnime");
    const slideInRight = document.querySelector(".slideInRight");
    const fadeInLeft = document.querySelector(".fadeInLeft");
    const fadeInRight = document.querySelector(".fadeInRight");

    const ElementParallax = document.querySelector("#paragraph");

    if (containerHeader.getBoundingClientRect().top < 0) {
      Paragraph.style.opacity = 1;

      fadeInUp.forEach((e) => {
        e.classList.add("animation");
        e.classList.remove("fadeInDown");
      });

      slideInRight.classList.add("animation");
      slideInRight.classList.remove("slideOutRight");
      fadeInLeft.classList.add("animation");
      fadeInLeft.classList.remove("fadeOutLeft");
    } else {
      slideInRight.classList.add("slideOutRight");
      fadeInLeft.classList.add("fadeOutLeft");

      fadeInUp.forEach((e) => {
        e.classList.add("fadeInDown");
      });
    }
  };

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
