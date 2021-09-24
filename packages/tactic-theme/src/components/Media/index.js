import React from "react";
import { connect } from "frontity";
import {} from "./styles";

const Media = ({ state, idImg, element }) => {
  const media = state.source.attachment[idImg];
  return (
    element === "home" && <img src={media.source_url} alt={media.alt_text} />
  );
};

export default connect(Media);
