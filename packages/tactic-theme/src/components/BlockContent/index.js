import React, { useRef } from "react";
import { connect } from "frontity";
import { BlockCont } from "./styles";
import gsap from "gsap";
import { useIntersection } from "react-use";

const BlockContent = ({ children }) => {
  const contentRef = useRef(null);

  const intersection = useIntersection(contentRef, {
    root: null,
    rootMargin: "-50px",
    threshold: 0.1,
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
      <BlockCont className="fadeInUp fadeObserve">{children}</BlockCont>
    </>
  );
};

export default connect(BlockContent);
