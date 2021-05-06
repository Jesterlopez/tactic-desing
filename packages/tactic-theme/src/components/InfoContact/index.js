import React from "react";
import { connect } from "frontity";
import { IconArrowRight } from "../Icons";

import { AnchorEmail, AnchorNewsletter } from "./styles";

const InfoContact = () => {
  return (
    <>
      <AnchorEmail href="#" className="send__email">
        <IconArrowRight />
        <span className="text__italic">Want to work with us ?</span>
        <span className="font__bold">Brief Us</span>
      </AnchorEmail>
      <AnchorNewsletter href="#">
        <span className="text__italic">Vous voulez de nos nowvelles ?</span>
        <span className="font__bold">Newsletter.</span>
      </AnchorNewsletter>
    </>
  );
};

export default connect(InfoContact);
