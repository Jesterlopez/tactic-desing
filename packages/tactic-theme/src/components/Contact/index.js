import React from "react";
import { connect } from "frontity";
import AnchorLink from "../AnchorLink";

import { ContainerContact } from "./styles";

const Contact = () => {
  return (
    <>
      <ContainerContact>
        <AnchorLink className="contact__address" href="#">
          16 Place Cormontaigne, 59000 Lille France
        </AnchorLink>
        <AnchorLink className="contact__phone" href="#">
          +505 89562302
        </AnchorLink>
        <AnchorLink className="contact__email" href="#">
          contact@company.com
        </AnchorLink>
      </ContainerContact>
    </>
  );
};
export default connect(Contact);
