import React from "react";
import { connect } from "frontity";
import AnchorLink from "../AnchorLink";

import { ContainerContact } from "./styles";

const Contact = () => {
  return (
    <>
      <ContainerContact>
        <AnchorLink className="contact__address" href="#">
          Planes de Altamira, Plaza San Agustín, Módulo 3. Managua, Nicaragua.
        </AnchorLink>
        <AnchorLink className="contact__phone" href="#">
          (505) 2223 6113
        </AnchorLink>
        <AnchorLink className="contact__email" href="#">
          info@tactic-center.com
        </AnchorLink>
      </ContainerContact>
    </>
  );
};
export default connect(Contact);
