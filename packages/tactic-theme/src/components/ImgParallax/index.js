import React from "react";
import { connect } from "frontity";
import {} from "./styles";
import { Parallax } from "react-parallax";

const ImgParallax = ({ state, imgID, height, strength }) => {
  const media = state.source.attachment[imgID];

  return (
    <>
      <Parallax
        bgImage={media.source_url}
        strength={strength}
        style={{ height: height }}
      ></Parallax>
    </>
  );
};

export default connect(ImgParallax);
