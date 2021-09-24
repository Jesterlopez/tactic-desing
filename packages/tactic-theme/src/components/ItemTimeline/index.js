import React from "react";
import { connect } from "frontity";
import { ContainerItem, TitleItem, ContentItem } from "./styles";

const ItemTimeline = ({ textUp, textDown, content }) => {
  return (
    <>
      <ContainerItem>
        <TitleItem>
          <span>.</span>
          <span>{textUp}.</span>
          <span className="text__italic">{textDown}</span>
        </TitleItem>
        <ContentItem>{content}</ContentItem>
      </ContainerItem>
    </>
  );
};

export default connect(ItemTimeline);
