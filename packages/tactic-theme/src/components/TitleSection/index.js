import React, { useRef, useEffect, useCallback } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIntersection, useWindowSize } from "react-use";
import { connect } from "frontity";
import { Span } from "./styles";

// gsap.registerPlugin(ScrollTrigger);

const TitleSection = ({ state, textUp, textDown }) => {
  const titleRef = useRef(null);
  const titleSectionRef = useRef(null);
  // const ContainerRef = useRef < HTMLDivElement > null;

  // const windowSize = useWindowSize();
  // const dataAnimation = {
  //   ease: 0.1,
  //   curr: 0,
  //   prev: 0,
  //   rounded: 0,
  // };

  // const smoothScroll = useCallback(() => {
  //   dataAnimation.curr = window.scrollY;
  //   dataAnimation.prev +=
  //     (dataAnimation.curr - dataAnimation.prev) * dataAnimation.ease;
  //   dataAnimation.rounded = Math.round((dataAnimation.prev * 100) / 100);
  //   requestAnimationFrame(() => smoothScroll());
  // }, [dataAnimation]);

  // // useEffect(() => {
  // //   requestAnimationFrame(() => smoothScroll());
  // // }, []);

  // const initScrollAnimation = useCallback(() => {
  //   const AnimationObj = {
  //     duration: 0.8,
  //     y: -80,
  //     opacity: 0,
  //   };
  //   gsap.to(titleSectionRef.current, {
  //     scrollTrigger: {
  //       trigger: titleSectionRef.current,
  //       start: "center 30%",
  //       scrub: true,
  //     },
  //     ...AnimationObj,
  //   });
  // }, []);
  // useEffect(() => {
  //   initScrollAnimation;
  // }, [windowSize.height, initScrollAnimation]);

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
      <div ref={titleSectionRef} style={{ height: "90", overflow: "hidden" }}>
        <Span className="fadeInUp fadeObserve fadeIn">{textUp}</Span>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Span className="fadeInUp fadeObserve fadeIn">{textDown}</Span>
      </div>
    </>
  );
};

export default connect(TitleSection);
