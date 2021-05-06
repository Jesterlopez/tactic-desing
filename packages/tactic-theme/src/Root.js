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

    if (containerHeader.getBoundingClientRect().top < 0) {
      containerHeader.classList.add("expanded__height");
    } else {
      containerHeader.classList.remove("expanded__height");
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
      {/* <Paragraph /> */}
      {/* div solo para rellenar temporal  */}
      <Content className="margin__bottom__end" />
      <FooterPage />
    </>
  );
};

export default connect(Root);
