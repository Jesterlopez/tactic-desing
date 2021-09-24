import React, { useRef } from "react";

import {
  SVG,
  HLeft,
  HMid,
  HRight,
  ELeft,
  ETop,
  EMid,
  EBottom,
  LOneLong,
  LOneShort,
  LTwoLong,
  LTwoShort,
  O,
  Dot,
} from "./styles";
const HelloComponent = () => {
  const helloRef = useRef();
  return (
      <SVG
        className="prefix__hello-word"
        width={350}
        height={280}
        viewBox="0 0 350 280"
        ref={helloRef}
        id="hello"
      >
        <HLeft
          className="prefix__H-left-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M17 0v124"
        />
        <HMid
          className="prefix__H-mid-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M33 62h35"
        />
        <HRight
          className="prefix__H-right-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M84 0v124"
        />
        <ELeft
          className="prefix__E-left-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M138 0v124"
        />
        <ETop
          className="prefix__E-top-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M154 17h47"
        />
        <EMid
          className="prefix__E-mid-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M154 62h42"
        />
        <EBottom
          className="prefix__E-bottom-stroke"
          stroke="#1c1b20"
          fill="none"
          strokeWidth={34}
          d="M154 107h47"
        />
        <g>
          <LOneLong
            className="prefix__L-one-long-stroke"
            stroke="#1c1b20"
            fill="none"
            strokeWidth={34}
            d="M17 153v124"
          />
          <LOneShort
            className="prefix__L-one-short-stroke"
            stroke="#1c1b20"
            fill="none"
            strokeWidth={34}
            d="M33 260h44"
          />
        </g>
        <g>
          <LTwoLong
            className="prefix__L-two-long-stroke"
            stroke="#1c1b20"
            fill="none"
            strokeWidth={34}
            d="M104 153v124"
          />
          <LTwoShort
            className="prefix__L-two-short-stroke"
            stroke="#1c1b20"
            fill="none"
            strokeWidth={34}
            d="M120 260h44"
          />
        </g>
        <g>
          <O
            className="prefix__O-stroke"
            cx={231}
            cy={215}
            r={48}
            stroke="#1c1b20"
            fill="none"
            strokeWidth={31}
          />
        </g>
        <g>
          <Dot
            cx={403.17}
            cy={316.01}
            r={25.67}
            stroke="#FF5851"
            className="prefix__red-dot"
            d="M325 260h0"
          />
        </g>
      </SVG>
  );
};

export default HelloComponent;
