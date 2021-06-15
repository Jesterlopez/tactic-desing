import React, { useEffect } from "react";
import {
  ArrowRight,
  IconWave,
  IconScroll,
  Circle,
  ArrowContact,
  Equis,
  CircleClose,
  ArrowRightButton,
} from "./styles";

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

export const IconArrowRightButton = ({ className }) => {
  return (
    <ArrowRightButton className={className}>
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
    </ArrowRightButton>
  );
};

export const IconWaveQuote = ({ color, children, className, animation }) => {
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
      <div className={"slideInRight fadeObserve" + " " + animation}></div>
    </IconWave>
  );
};

export const IconWaveQuoteTwo = ({ color, children, className }) => {
  const stroke = {
    stroke: color,
  };
  const viewBox = `0 0 73.94 14.19`;
  return (
    <IconWave className="waveParagraph">
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
    </IconWave>
  );
};

export const IconWaveQuoteLow = ({ color, className }) => {
  const stroke = {
    stroke: color,
  };
  const viewBox = `0 0 73.94 14.19`;
  return (
    <IconWave className={className}>
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
    </IconWave>
  );
};

export const IconScrollDown = ({ state }) => {
  return (
    <IconScroll className="scrollDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={18}
        viewBox="0 0 17 10"
      >
        <path
          fill="#fff"
          className="prefix__cls-1"
          d="M6.22 8.75L3.37 5.89H17V4.12H3.37l2.85-2.87L5 0 0 5l5 5z"
        />
      </svg>
    </IconScroll>
  );
};

export const IconToggleClose = ({ state }) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollColorToggle);
    return () => {
      removeEventListener("scroll", scrollColorToggle);
    };
  }, []);
  const scrollColorToggle = () => {
    const toggleBlog = document.querySelector("#toggleBlog");
    const brandBlog = document.querySelector("#brandBlog");

    const limit = document.getElementById("parallaxBlog");
    if (limit.getBoundingClientRect().bottom <= 50) {
      toggleBlog.classList.add("colorTwo");
      brandBlog.classList.add("colorTwo");
    } else {
      toggleBlog.classList.remove("colorTwo");
      brandBlog.classList.remove("colorTwo");
    }
  };
  return <Circle id="toggleBlog"></Circle>;
};

export const IconToggleCloseContact = ({ state }) => {
  return (
    <CircleClose id="btnClose">
      <Equis />
    </CircleClose>
  );
};

export const IconArrowContact = () => {
  return (
    <ArrowContact
      width="24"
      height="24"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
    </ArrowContact>
  );
};
