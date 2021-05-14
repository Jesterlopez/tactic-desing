import { Global, css, connect, styled, Head } from "frontity";
import React, { useEffect, useState } from "react";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";
import ContainerHeader from "./components/HeaderFirst";
import Paragraph from "./components/Paragraph";
import FooterPage from "./components/FooterPage";
import Content from "./components/Content";
import ContentPage from "./components/ContentPage";
import Single from "./components/Single";
import Error404 from "./components/404";
import Home from "./components/Home";

import Servicios from "./pages/Servicios";

import { Globalstyle } from "./components/Styles/styles";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const data2 = state.source;
  const id = data.id;
  // animacion del home al hace scroll
  useEffect(() => {
    actions.source.fetch("/inicio");
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollParallax);

    return () => {
      window.removeEventListener("scroll", handleScrollParallax);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const containerHeader = document.getElementById("header");
    const Hello = document.getElementById("hello");
    const Paragraph = document.getElementById("paragraph");

    const fadeInUp = document.querySelectorAll(".fadeInUp");
    const slideInRight = document.querySelector(".slideInRight");
    const fadeInLeft = document.querySelector(".fadeInLeft");
    const fadeInRight = document.querySelector(".fadeInRight");

    const Content = document.querySelector("#content");
    const Section = document.querySelector("#section");

    // if (Section.getBoundingClientRect().top < 100) {
    //   fadeInRight.classList.add("animation");
    // } else {
    //   fadeInRight.classList.remove("animation");
    // }

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
  };

  const handleScrollParallax = () => {
    let scrollPosition = window.pageYOffset;
    const ElementParallax = document.querySelector("#paragraph");
    const Content = document.querySelector("#content");

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
  };
  return (
    <>
      <Globalstyle />
      <BorderPage />
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
          <Paragraph />
          <Home /> <FooterPage />
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
          <ContentPage>{/* <Single state={state}></Single> */}</ContentPage>
        </>
      )}
      {data.isPage && (
        <>
          <ContentPage>
            <h1>Is page</h1>
          </ContentPage>
          {/* <ContainerHeader />
          <Paragraph /> */}
          {/* <Content className="margin__bottom__end" /> */}
          {/* <FooterPage /> */}
          {/* <ContentPage>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data2.page[id].content.rendered}`,
              }}
            ></div>
          </ContentPage> */}
        </>
      )}
    </>
  );
};

export default connect(Root);
