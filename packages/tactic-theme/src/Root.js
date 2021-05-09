import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";
import ContainerHeader from "./components/HeaderFirst";
import Paragraph from "./components/Paragraph";
import FooterPage from "./components/FooterPage";
import Content from "./components/Content";

import Servicios from "./pages/Servicios";

import { Globalstyle } from "./components/Styles/styles";
import "./components/Styles/styles.css";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageLink = data.link.slice(0, -1).replace("/", "");

  // animacion del home al hace scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const containerHeader = document.getElementById("header");
    const Hello = document.getElementById("hello");
    const Paragraph = document.getElementById("paragraph");

    const fadeInUp = document.querySelectorAll(".fadeInUp");
    const slideInRight = document.querySelector(".slideInRight");
    const fadeInLeft = document.querySelector(".fadeInLeft");

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
    } else {
      Hello.style.opacity = 1;
      Hello.style.display = "block";
    }
  };

  return (
    <>
      <Globalstyle />
      <BorderPage />
      <HeaderPage namePage={(data.isError && "Not Found") || pageLink} />
      <MenuNavbar />
      <br></br>
      <br></br>
      {data.isHome && (
        <>
          <ContainerHeader />
          <Paragraph />
          <Content className="margin__bottom__end" />
          <FooterPage />
        </>
      )}
      {data.isServicioArchive && (
        <>
          <Servicios></Servicios>
        </>
      )}
      {data.isFetching && <h1>Cargando...</h1>}
      {data.isError && <h1>404</h1>}
    </>
  );
};

export default connect(Root);
