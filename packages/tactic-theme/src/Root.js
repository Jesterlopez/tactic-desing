import React from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";

import { Globalstyle } from "./components/Styles/styles";

const Root = () => {
  return (
    <>
      <Globalstyle />
      {/* <Header /> */}
      <BorderPage />
      <HeaderPage />
      <MenuNavbar />
    </>
  );
};

export default connect(Root);
