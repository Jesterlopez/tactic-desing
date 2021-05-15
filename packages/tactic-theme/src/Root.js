import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";
import MenuToggleMobile from "./components/MenuToggleMobile";
import ContainerHeader from "./components/HeaderFirst";
import Paragraph from "./components/Paragraph";
import FooterPage from "./components/FooterPage";
import Content from "./components/Content";
import ContentPage from "./components/ContentPage";
import Single from "./components/Single";
import Error404 from "./components/404";
import Home from "./components/Home";
import Title from "./title";

import Servicios from "./pages/Servicios";

import { Globalstyle } from "./components/Styles/styles";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const data2 = state.source;
  const id = data.id;
  // animacion del home al hace scroll
  useEffect(() => {
    actions.source.fetch("/inicio");
    if (document.readyState === "complete") {
      window.addEventListener("scroll", scrollAnimations);
      // window.addEventListener("scroll", handleScrollParallax);
      // window.addEventListener("scroll", scrollFadeIn);
    }

    return () => {
      // window.removeEventListener("scroll", handleScrollParallax);
      window.removeEventListener("scroll", scrollAnimations);
    };
  }, []);

  // const scrollFadeIn = () => {
  //   const img = document.querySelectorAll(".fadeObserve");
  //   const callback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animation");
  //       }
  //     });
  //   };

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0,
  //   };

  //   const myObserver = new IntersectionObserver(callback, options);

  //   img.forEach((img) => {
  //     myObserver.observe(img);
  //   });
  // };

  const scrollAnimations = () => {
    const img = document.querySelectorAll(".fadeObserve");
    const containerHeader = document.getElementById("header");
    const Hello = document.getElementById("hello");
    const Paragraph = document.getElementById("paragraph");

    const fadeInUp = document.querySelectorAll(".scrollAnime");
    const slideInRight = document.querySelector(".slideInRight");
    const fadeInLeft = document.querySelector(".fadeInLeft");
    const fadeInRight = document.querySelector(".fadeInRight");
    let scrollPosition = window.pageYOffset;
    const ElementParallax = document.querySelector("#paragraph");

    const Content = document.querySelector("#content");

    if (containerHeader.getBoundingClientRect().top < 0) {
      containerHeader.classList.add("expanded__height");
      Paragraph.style.opacity = 1;

      fadeInUp.forEach((e) => {
        e.classList.add("animation");
        e.classList.remove("fadeInDown");
      });

      slideInRight.classList.add("animation");
      slideInRight.classList.remove("slideOutRight");
      fadeInLeft.classList.add("animation");
      fadeInLeft.classList.remove("fadeOutLeft");
    } else {
      slideInRight.classList.add("slideOutRight");
      fadeInLeft.classList.add("fadeOutLeft");

      fadeInUp.forEach((e) => {
        e.classList.add("fadeInDown");
      });
      containerHeader.classList.remove("expanded__height");
    }
    if (Content.getBoundingClientRect().top < 0) {
      Hello.style.display = "none";
      Hello.style.opacity = 0;
      Paragraph.style.opacity = 0;
      Paragraph.style.zIndex = -1;
    } else {
      Hello.style.opacity = 1;
      Hello.style.display = "block";
      Paragraph.style.zIndex = 1;
    }

    if (
      Content.getBoundingClientRect().top <= 700 &&
      Content.getBoundingClientRect().top > 0
    ) {
      ElementParallax.style.transform = `translateY(calc(-25% + -${
        (scrollPosition / 50) * 3
      }%))`;
    } else {
      ElementParallax.style.transform = `translateY(-50%)`;
    }

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const myObserver = new IntersectionObserver(callback, options);

    img.forEach((img) => {
      myObserver.observe(img);
    });
  };

  // const handleScroll = (e) => {
  //   const containerHeader = document.getElementById("header");
  //   const Hello = document.getElementById("hello");
  //   const Paragraph = document.getElementById("paragraph");

  //   const fadeInUp = document.querySelectorAll(".scrollAnime");
  //   const slideInRight = document.querySelector(".slideInRight");
  //   const fadeInLeft = document.querySelector(".fadeInLeft");
  //   const fadeInRight = document.querySelector(".fadeInRight");

  //   const Content = document.querySelector("#content");

  //   if (containerHeader.getBoundingClientRect().top < 0) {
  //     console.log(containerHeader.getBoundingClientRect().top);
  //     containerHeader.classList.add("expanded__height");
  //     Paragraph.style.opacity = 1;

  //     fadeInUp.forEach((e) => {
  //       e.classList.add("animation");
  //       e.classList.remove("fadeInDown");
  //     });

  //     slideInRight.classList.add("animation");
  //     slideInRight.classList.remove("slideOutRight");
  //     fadeInLeft.classList.add("animation");
  //     fadeInLeft.classList.remove("fadeOutLeft");
  //   } else {
  //     slideInRight.classList.add("slideOutRight");
  //     fadeInLeft.classList.add("fadeOutLeft");

  //     fadeInUp.forEach((e) => {
  //       e.classList.add("fadeInDown");
  //     });
  //     containerHeader.classList.remove("expanded__height");
  //   }
  //   if (Content.getBoundingClientRect().top < 0) {
  //     Hello.style.display = "none";
  //     Hello.style.opacity = 0;
  //     Paragraph.style.opacity = 0;
  //     Paragraph.style.zIndex = -1;
  //   } else {
  //     Hello.style.opacity = 1;
  //     Hello.style.display = "block";
  //     Paragraph.style.zIndex = 1;
  //   }

  //   // When the user scrolls the page, execute myFunction
  //   // // Get the header
  //   // var header = document.getElementById("hello");
  //   // console.log(header);

  //   // // Get the offset position of the navbar
  //   // var sticky = header.offsetTop;

  //   // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  //   // function myFunction() {
  //   //   if (window.pageYOffset > sticky) {
  //   //     header.classList.add("d-none");
  //   //   } else {
  //   //     header.classList.remove("d-none");
  //   //   }
  //   // }
  // };

  // const handleScrollParallax = () => {
  //   let scrollPosition = window.pageYOffset;
  //   const ElementParallax = document.querySelector("#paragraph");
  //   const Content = document.querySelector("#content");

  //   if (
  //     Content.getBoundingClientRect().top <= 700 &&
  //     Content.getBoundingClientRect().top > 0
  //   ) {
  //     ElementParallax.style.transform = `translateY(calc(-25% + -${
  //       (scrollPosition / 50) * 3
  //     }%))`;
  //   } else {
  //     ElementParallax.style.transform = `translateY(-50%)`;
  //   }
  // };

  return (
    <>
      <Title />
      <Globalstyle />
      <BorderPage />
      <MenuToggleMobile />
      <HeaderPage
        namePage={
          (data.isError && "Not Found") ||
          (data.isPage && data2.page[id].title.rendered) ||
          (data.isPost && data2.post[id].title.rendered) ||
          (data.isServicioArchive && data.type)
        }
      />
      <MenuNavbar />
      {data.isHome && (
        <>
          <ContainerHeader />
          <Home />
          <FooterPage />
        </>
      )}
      {data.isServicioArchive && (
        <>
          <ContentPage>
            <Servicios></Servicios>
          </ContentPage>
        </>
      )}

      {data.isFetching && <h1>Cargando...</h1>}
      {data.isError && (
        <>
          <ContentPage>
            <Error404 />
          </ContentPage>
        </>
      )}
      {data.isPost && (
        <>
          <ContentPage>
            <Single></Single>
          </ContentPage>
        </>
      )}
      {data.isPage && (
        <>
          <ContentPage>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data2.page[id].content.rendered}`,
              }}
            ></div>
          </ContentPage>
        </>
      )}
    </>
  );
};

export default connect(Root);
