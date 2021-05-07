import React, { useEffect } from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";
import ContainerHeader from "./components/HeaderFirst";
import Paragraph from "./components/Paragraph";
import FooterPage from "./components/FooterPage";
import Content from "./components/Content";
import { Globalstyle } from "./components/Styles/styles";
import "./components/Styles/styles.css";

const Root = () => {
  // animacion del home al hace scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const containerHeader = document.getElementById("header");
    const Hello = document.getElementById("hello");
    const Paragraph = document.getElementById("paragraph");
    const Content = document.querySelector("#content");

    if (containerHeader.getBoundingClientRect().top < 0) {
      containerHeader.classList.add("expanded__height");
    } else {
      containerHeader.classList.remove("expanded__height");
    }
    if (Content.getBoundingClientRect().top < 0) {
      Hello.style.opacity = 0;
      Paragraph.style.opacity = 0;
    } else {
      Hello.style.opacity = 1;
      Paragraph.style.opacity = 1;
    }
  };
  return (
    <>
      <Globalstyle />
      {/* <Header /> */}
      <BorderPage />
      <HeaderPage />
      <MenuNavbar />
      <ContainerHeader />
      <Paragraph id="paragraph" />
      {/* div solo para rellenar temporal  */}
      <Content className="margin__bottom__end" />
      <FooterPage />
    </>
  );
};

export default connect(Root);
