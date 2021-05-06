import React from "react";
import { connect } from "frontity";
import { ContainerContent } from "./styles";

const Content = () => {
  return (
    <>
      <ContainerContent id="content">
        <img src="https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg" />
      </ContainerContent>
    </>
  );
};
export default connect(Content);
