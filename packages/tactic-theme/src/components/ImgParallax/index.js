import React from "react";
import { connect } from "frontity";
import {} from "./styles";
import { Parallax, Background } from "react-parallax";

const ImgParallax = ({ state, imgID, height, strength }) => {
  const media = state.source.attachment[imgID];

  return (
    <>
      {/* <Parallax
        bgImage={media.source_url}
        strength={strength}
        style={{ height: height }}
        id="parallaxImage"
      ></Parallax> */}
      <Parallax
        id="parallaxImage"
        strength={strength}
        style={{ height: "100vh", zIndex: 7 }}
      >
        <Background>
          <img src={media.source_url}></img>
        </Background>
      </Parallax>
    </>
  );
};

export default connect(ImgParallax);
