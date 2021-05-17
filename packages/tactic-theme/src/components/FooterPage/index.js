import React from "react";
import { connect } from "frontity";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import { Footer, Credits } from "./styles";

const FooterPage = () => {
  return (
    <Footer>
      <div className="padding__custom">
        <InfoContact />
        <Contact />
        <Credits>
          <a href="#" className="logo__company credit__link">
            <img
              src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
              alt=""
            />
            ©Tactic Center
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
  );
};

export default connect(FooterPage);
