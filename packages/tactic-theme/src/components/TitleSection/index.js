import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { connect } from "frontity";
import { Span } from "./styles";

const TitleSection = ({ state, textUp, textDown }) => {
  const titleRef = useRef(null);
  const intersection = useIntersection(titleRef, {
    root: null,
    rootMargin: "-50px",
    threshold: 0.1,
    nullTargetWarn: false,
  });

  if (document.querySelector(".fadeIn")) {
    const fadeIn = (el) => {
      gsap.to(el, 0.2, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = (el) => {
      gsap.to(el, 0.2, {
        opacity: 0.5,
        y: 60,
        ease: "power4.out",
      });
    };

    intersection && intersection.intersectionRatio < 0.1
      ? fadeOut(".fadeIn")
      : fadeIn(".fadeIn");
  }

  return (
    <>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Span className="fadeInUp fadeObserve fadeIn">{textUp}</Span>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Span className="fadeInUp fadeObserve fadeIn">{textDown}</Span>
      </div>
    </>
  );
};

export default connect(TitleSection);
