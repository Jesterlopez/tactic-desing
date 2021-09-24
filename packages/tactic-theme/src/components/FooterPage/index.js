import React, { useRef, useCallback, useEffect } from "react";
import { connect } from "frontity";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import { Footer, Credits } from "./styles";
import fxScrollFooter from "../../utils/fxScrollFooter";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FooterPage = () => {
  const creditsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollCustom = () => fxScrollFooter(creditsRef);

  useEffect(() => {
    window.addEventListener("scroll", scrollCustom);
  }, []);

  return (
    <>
      <Footer ref={footerRef} id="footer">
        <div className="padding__custom">
          <InfoContact />
          <Contact />
          <Credits
            id="credits"
            ref={creditsRef}
          >
            <a href="#" className="logo__company credit__link">
              <img
                src="https://admin-tactic.tactic-center.com/wp-content/uploads/2021/06/image-2.png"
                alt=""
              />
              <span> ©Tactic Digital</span>
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
