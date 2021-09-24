import React, { useRef, useEffect } from "react";
import { connect } from "frontity";

import { ContainerContact } from "./styles";
import fxScrollFooter from "../../utils/fxScrollFooter";

const Contact = ({ state }) => {
  const contactRef = useRef(null);

  const scrollCustom = () =>  fxScrollFooter(contactRef);;

  useEffect(() => {
    window.addEventListener("scroll", scrollCustom);

    return () => {
      removeEventListener("scroll", scrollCustom);
    };
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
        <a className="contact__email" href="mailto:jester.lopez@tactic-center.com">
          info@tactic-center.com
        </a>
      </ContainerContact>


    </>
  );
};
export default connect(Contact);
