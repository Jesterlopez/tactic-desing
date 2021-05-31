import React from "react";
import { connect } from "frontity";
import { ContainerScroll, IndicatorScrollDown } from "./styles";
import { IconScrollDown } from "../Icons";

export const ScrollDown = () => {
  return (
    <IndicatorScrollDown className="fadeOut" id="scrollDown">
      Scroll
      <IconScrollDown />
    </IndicatorScrollDown>
  );
};

export const ScrollDown2 = ({ className }) => {
  return (
    <IndicatorScrollDown
      className={"fadeOut animation scrollDownTwo " + className}
      id="scrollDown2"
    >
      Scroll
      <IconScrollDown />
    </IndicatorScrollDown>
  );
};
