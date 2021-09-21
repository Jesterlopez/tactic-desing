import React, { useRef, useEffect } from "react";
import { connect } from "frontity";

import { ContainerContact } from "./styles";

const Contact = ({ state }) => {
  const contactRef = useRef(null);

  const scrollCustom = () => {
    const Content = document.getElementById("contentGeneral");
    const ContentBlog = document.getElementById("contentBlog");

    if (Content === null) {
      if (ContentBlog?.getBoundingClientRect().bottom < 850) {
        if (
          typeof contactRef.current === "null"
            ? null
            : (contactRef.current.style.transform = `translateY(calc(-${
                ContentBlog?.getBoundingClientRect().bottom / 25
              }px))`)
        );
      }
    } else {
      if (Content?.getBoundingClientRect().bottom < 850) {
        if (
          typeof contactRef.current === "null"
            ? null
            : (contactRef.current.style.transform = `translateY(calc(-${
                Content?.getBoundingClientRect().bottom / 25
              }px))`)
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCustom);
  }, []);

  return (
    <>
      <ContainerContact id="contact" className="fadeInUp" ref={contactRef}>
        <a
          className="contact__address"
          href="https://goo.gl/maps/Pryy8sjYrQ2uqNVj6"
        >
          Planes de Altamira, Plaza San Agustín, Módulo 3. Managua, Nicaragua.
        </a>

        <a className="contact__phone" href="tel:2223-6113">
          (505) 2223 6113
        </a>
        <a className="contact__email" href="mailto:info@tactic-center.com">
          info@tactic-center.com
        </a>
      </ContainerContact>
    </>
  );
};
export default connect(Contact);
