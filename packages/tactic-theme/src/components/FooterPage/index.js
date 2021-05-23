import React, { useRef, useCallback, useEffect } from "react";
import { connect } from "frontity";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import { Footer, Credits } from "./styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const FooterPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const creditsRef = useRef(null);
  const footerRef = useRef(null);

  // let lt = gsap.timeline();

  // lt.from("#credits", {
  //   duration: 2,
  //   x: 100,
  // });

  // gsap.to("#credits", {
  //   duration: 2,
  //   x: 300,
  // });
  // useEffect(() => {
  //   gsap.to("#send__email", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "20px 100%",
  //       end: "bottom 100px",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 0,
  //   });
  //   gsap.to("#suscribe", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "20px 100%",
  //       end: "bottom 100px",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 0,
  //   });
  //   gsap.to("#contact", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "20px 100%",
  //       end: "bottom 100px",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 0,
  //   });
  //   gsap.to("#credits", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "20px 100%",
  //       end: "bottom 100px",
  //       toggleActions: "restart pause reverse pause",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 0,
  //   });
  // }, []);
  // ScrollTrigger.create({
  //   trigger: '#chart-wrapper',
  //   endTrigger: '#step-4',
  //   start: 'center center',
  //   end: () => {
  //       const height = window.innerHeight;
  //       const chartHeight = document.querySelector('#chart-wrapper').offsetHeight;
  //       return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
  //   },
  //   pin: true,
  //   pinSpacing: false
  // });

  // gsap.to("#suscribe", {
  //   scrollTrigger: {
  //     trigger: "#footer",
  //     start: "center 90%",
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  //   y: 0,
  //   duration: 3,
  // });
  // gsap.to("#contact", {
  //   scrollTrigger: {
  //     trigger: "#footer",
  //     start: "center 90%",
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  //   y: 0,
  //   duration: 3,
  // });
  // gsap.to("#credits", {
  //   scrollTrigger: {
  //     trigger: "#footer",
  //     start: "center 90%",
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  //   y: 0,
  //   duration: 3,
  // });
  // }, []);
  // const footerAnimation = useCallback(() => {
  //   // const AnimationObj = {
  //   //   duration: 0.8,
  //   //   y: -80,
  //   //   opacity: 0,
  //   // };
  //   gsap.to("#send__email", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "center 90%",
  //       end: "bottom bottom",
  //       scrub: true,
  //       markers: true,
  //       // pin: "#credits",
  //     },
  //     y: 0,
  //     duration: 3,
  //   });
  //   gsap.to("#suscribe", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "center 90%",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //     y: 0,
  //     duration: 3,
  //   });
  //   gsap.to("#contact", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "center 90%",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //     y: 0,
  //     duration: 3,
  //   });
  //   gsap.to("#credits", {
  //     scrollTrigger: {
  //       trigger: "#footer",
  //       start: "center 90%",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //     y: 0,
  //     duration: 3,
  //   });
  // gsap.to("#suscribe", {
  //   yPercent: -200,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "#suscribe",
  //     start: "bottom bottom", // the default values
  //     end: "bottom top",
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: footerRef.current,
  //       start: "center bottom",
  //       end: "top top",
  //       scrub: true,
  //       markers: true,
  //     },
  //   })
  //   .to("#send__email", { yPercent: -40 }, 0)
  //   .to("#suscribe", { yPercent: 45 }, 0)
  //   .to("#contact", { yPercent: 170 }, 0)
  //   .to("#credits", { yPercent: 35 }, 0);
  // }, []);
  // useEffect(() => {
  //   // setBodyHeight()
  //   footerAnimation();
  // }, []);

  return (
    <>
      <Footer ref={footerRef} id="footer">
        <div className="padding__custom">
          <InfoContact />
          <Contact />
          <Credits id="credits" ref={creditsRef}>
            <a href="#" className="logo__company credit__link">
              <img
                src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
                alt=""
              />
              <span> ©Tactic Center</span>
            </a>
            <a href="#" className="credit__link">
              Muestras legales
            </a>
            <a href="#" className="credit__link">
              Nuestra politica de privacidad
            </a>
          </Credits>
        </div>
      </Footer>
    </>
  );
};

export default connect(FooterPage);
