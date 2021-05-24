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

  // const initScrollAnimation = useCallback(() => {
  //   gsap.to(creditsRef.current, {
  //     scrollTrigger: {
  //       trigger: !creditsRef.current,
  //       start: "center 90%",
  //       // end: "center bottom",
  //       // markers: true,
  //       scrub: true,
  //     },
  //     translateY: "50%",
  //     duration: 0.8,
  //     stagger: {
  //       from: "center",
  //       amount: 0.9,
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   initScrollAnimation();
  // }, [initScrollAnimation]);

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
                src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
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
