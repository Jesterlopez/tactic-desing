import React, { useRef, useCallback, useEffect } from "react";
import { connect } from "frontity";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import { Footer, Credits } from "./styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const FooterPage = () => {
  const creditsRef = useRef(null);

  const footerRef = useRef(null);

  const initScrollAnimation = useCallback(() => {
    // console.log(Content);
    // gsap.to(footerRef.current, {
    //   scrollTrigger: {
    //     trigger: !footerRef.current,
    //     start: "center 100%",
    //     // end: "bottom bottom",
    //     markers: true,
    //     scrub: true,
    //   },
    //   background: "red",
    //   duration: 0.8,
    //   stagger: {
    //     from: "center",
    //     amount: 0.9,
    //   },
    // });
  }, []);

  const scrollCustom = () => {
    const footer = document.getElementById("footer");
    const Content = document.getElementById("contentGeneral");
    const ContentBlog = document.getElementById("contentBlog");
    const email = document.getElementById("send__email");

    if (Content === null) {
      if (ContentBlog?.getBoundingClientRect().bottom < 850) {
        footer.style.position = "fixed";
        creditsRef.current.style.transform = `translateY(calc(-${
          ContentBlog.getBoundingClientRect().bottom / 15
        }px))`;
      } else {
        footer.style.position = "relative";
      }
    } else {
      if (Content?.getBoundingClientRect().bottom < 850) {
        footer.style.position = "fixed";
        creditsRef.current.style.transform = `translateY(calc(-${
          Content.getBoundingClientRect().bottom / 15
        }px))`;
      } else {
        footer.style.position = "relative";
      }
    }
  };

  useEffect(() => {
    initScrollAnimation();
    window.addEventListener("scroll", scrollCustom);
  }, [initScrollAnimation]);

  return (
    <>
      <Footer ref={footerRef} id="footer">
        <div className="padding__custom">
          <InfoContact />
          <Contact />
          <Credits
            id="credits"
            ref={creditsRef}
            // style={{ transform: "translateY(-50%)" }}
          >
            <a href="#" className="logo__company credit__link">
              <img
                src="https://admin-tactic.tactic-center.com/wp-content/uploads/2021/06/image-2.png"
                alt=""
              />
              <span> ©Tactic Center</span>
            </a>
            <a href="#" className="credit__link">
              Muestras legales
            </a>
            <a href="#" className="credit__link">
              Nuestra politica de privacidad
            </a>
          </Credits>
        </div>
      </Footer>
    </>
  );
};

export default connect(FooterPage);
