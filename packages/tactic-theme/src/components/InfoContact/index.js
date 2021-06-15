import React, { useEffect, useRef } from "react";
import { connect } from "frontity";
import { IconArrowRight } from "../Icons";

import { AnchorEmail, AnchorNewsletter } from "./styles";

const InfoContact = () => {
  const btn = useRef(null);
  const emailRef = useRef(null);

  const contactClose = (e) => {
    const html = document.getElementsByTagName("html")[0];
    const form = document.getElementById("formContact");
    e.preventDefault();
    form.classList.add("animation");
    if (html.classList.contains("overflowContact")) {
    } else {
      html.classList.add("overflowContact");
    }
    const formContact = document.getElementById("formContact");
    formContact.classList.remove("hidden");
  };

  const scrollCustom = () => {
    const Content = document.getElementById("contentGeneral");
    const ContentBlog = document.getElementById("contentBlog");

    if (Content === null) {
      if (ContentBlog.getBoundingClientRect().bottom < 850) {
        emailRef.current.style.transform = `translateY(calc(-${
          ContentBlog.getBoundingClientRect().bottom / 50
        }px))`;
        btn.current.style.transform = `translateY(calc(-${
          ContentBlog.getBoundingClientRect().bottom / 50
        }px))`;
      }
    } else {
      if (Content.getBoundingClientRect().bottom < 850) {
        // var vertical_position = 0;
        // if (pageYOffset) {
        //   vertical_position = pageYOffset;
        // } else if (document.documentElement.clientHeight) {
        //   vertical_position = document.documentElement.scrollTop;
        // } else if (document.body) {
        //   vertical_position = document.body.scrollTop;
        // }

        // var your_div = emailRef.current;
        // your_div.style.transform =
        //   "translateY(calc(-" + vertical_position / 20 + "px))";

        emailRef.current.style.transform = `translateY(calc(-${
          Content.getBoundingClientRect().bottom / 50
        }px))`;
        btn.current.style.transform = `translateY(calc(-${
          Content.getBoundingClientRect().bottom / 50
        }px))`;
      }
    }
  };

  useEffect(() => {
    btn.current.addEventListener("click", contactClose);
    window.addEventListener("scroll", scrollCustom);

    return () => {
      removeEventListener("click", contactClose);
      removeEventListener("scroll", scrollCustom);
    };
  }, []);

  return (
    <>
      <AnchorEmail
        href="#"
        className="send__email fadeInUp"
        id="send__email"
        ref={emailRef}
      >
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
