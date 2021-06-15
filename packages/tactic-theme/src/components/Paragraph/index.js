import React, { useEffect } from "react";
import { connect } from "frontity";
import { IconWaveQuote, IconWaveQuoteTwo } from "../Icons";

import {
  ContainerParagraph,
  Quote,
  ParagraphContent,
  RefQuote,
} from "./styles";

const Paragraph = ({ referencia, fraseUp, fraseMid, fraseDown }) => {
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

    let scrollPosition = window.pageYOffset;
    const ElementParallax = document.querySelector("#paragraph");

    const Content = document.querySelector("#content");

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
    if (
      Content.getBoundingClientRect().top <= 700 &&
      Content.getBoundingClientRect().top > 0
    ) {
      ElementParallax.style.transform = `translateY(calc(-25% + -${
        (scrollPosition / 50) * 3
      }%))`;
    } else {
      ElementParallax.style.transform = `translateY(-50%)`;
    }
  };

  return (
    <>
      <ContainerParagraph id="paragraph">
        <Quote>
          <IconWaveQuoteTwo>
            <div className="slideInRight fadeObserve"></div>
          </IconWaveQuoteTwo>
          <RefQuote className="font__italic__paragraph fadeInLeft">
            {referencia}
          </RefQuote>
        </Quote>
        <ParagraphContent>
          <div className="text__primary text__dark">
            <strong className="fadeInUp scrollAnime">{fraseUp}</strong>
          </div>
          <div className="text__secundary text__white">
            <span>
              <strong className="fadeInUp scrollAnime">{fraseMid}</strong>
            </span>
            <span>
              <strong className="fadeInUp scrollAnime">{fraseDown}</strong>
            </span>
          </div>
        </ParagraphContent>
      </ContainerParagraph>
    </>
  );
};

export default connect(Paragraph);
