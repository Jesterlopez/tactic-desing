import React from "react";
import { connect } from "frontity";
import { Color } from "./styles";

const ColorHeader = ({ className, element }) => {
  if (element === "servicios") {
    return <Color className={"servicios" + " " + className} />;
  }
  if (element === "home") {
    return <Color className={"home" + " " + className} />;
  }
  if (element === "nosotros") {
    return <Color className={"nosotros" + " " + className} />;
  } else {
    return <Color className={className} />;
  }
};

export default connect(ColorHeader);
