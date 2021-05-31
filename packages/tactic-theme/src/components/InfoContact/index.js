import React, { useEffect, useRef } from "react";
import { connect } from "frontity";
import { IconArrowRight } from "../Icons";

import { AnchorEmail, AnchorNewsletter } from "./styles";

const InfoContact = () => {
  const btn = useRef(null);
  useEffect(() => {
    btn.current.addEventListener("click", contactClose);

    return () => {
      removeEventListener("click", contactClose);
    };
  }, []);

  const contactClose = (e) => {
    const html = document.getElementsByTagName("html")[0];
    e.preventDefault();
    if (html.classList.contains("overflowContact")) {
    } else {
      html.classList.add("overflowContact");
    }
    const formContact = document.getElementById("formContact");
    formContact.classList.remove("hidden");
  };
  return (
    <>
      <AnchorEmail href="#" className="send__email fadeInUp" id="send__email">
        <IconArrowRight />
        <span className="text__italic">
          Conoce nuestro programa de Partners!
        </span>
        <span className="font__bold">Partners</span>
      </AnchorEmail>
      <AnchorNewsletter
        href="#"
        ref={btn}
        id="suscribe"
        className="fadeInUp suscribe"
      >
        <span className="text__italic">Click para subscribirte!</span>
        <span className="font__bold">Suscríbete.</span>
      </AnchorNewsletter>
    </>
  );
};

export default connect(InfoContact);
