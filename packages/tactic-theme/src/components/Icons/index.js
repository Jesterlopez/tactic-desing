import React from "react";
import { ArrowRight, IconWave } from "./styles";

export const IconArrowRight = () => {
  return (
    <ArrowRight>
      <span className="line__arrow">
        <span className="inner"></span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="13"
        viewBox="0 0 7.57 12.88"
      >
        <polygon points="1.05 12.88 0 11.81 5.44 6.44 0 1.07 1.05 0 7.57 6.44 1.05 12.88"></polygon>
      </svg>
    </ArrowRight>
  );
};

export const IconWaveQuote = ({ color, children, className }) => {
  const stroke = {
    stroke: color,
  };
  const viewBox = `0 0 73.94 14.19`;
  return (
    <IconWave className={className}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="7"
        viewBox={viewBox}
      >
        <polyline
          style={stroke}
          points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83"
        ></polyline>
      </svg>
      <div className="slideInRight fadeObserve"></div>
    </IconWave>
  );
};
