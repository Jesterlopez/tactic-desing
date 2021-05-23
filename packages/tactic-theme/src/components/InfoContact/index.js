import React from "react";
import { connect } from "frontity";
import { IconArrowRight } from "../Icons";

import { AnchorEmail, AnchorNewsletter } from "./styles";

const InfoContact = () => {
  return (
    <>
      <AnchorEmail href="#" className="send__email fadeInUp" id="send__email">
        <IconArrowRight />
        <span className="text__italic">
          Conoce nuestro programa de Partners!
        </span>
        <span className="font__bold">Partners</span>
      </AnchorEmail>
      <AnchorNewsletter href="#" id="suscribe" className="fadeInUp">
        <span className="text__italic">Click para subscribirte!</span>
        <span className="font__bold">Suscríbete.</span>
      </AnchorNewsletter>
    </>
  );
};

export default connect(InfoContact);
