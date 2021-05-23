import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import SocialMedia from "../SocialMedia";
import AnchorLink from "../AnchorLink";
import MenuToggle from "../MenuToggle";
import ToggleLang from "../ToggleLang";
import NavLink from "../NavLink";
import {
  Header,
  Head,
  Brand,
  BrandImg,
  HeaderMiddle,
  Icon,
  Text,
  NamePage,
} from "./styles";

const HeaderPage = ({ namePage }) => {
  return (
    <>
      <Header>
        <Head>
          <Brand className="brand">
            <NavLink href="/" className="fadeOutUp height100 linkHome">
              Tactic Center
              {/* <BrandImg
                src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
                alt="logo tactic center"
              /> */}
            </NavLink>
            <NamePage className="text__italic" href="#">
              {namePage}
            </NamePage>
          </Brand>
        </Head>
        <HeaderMiddle>
          <MenuToggle />
          <ToggleLang media="desktop" />

          <SocialMedia />
        </HeaderMiddle>
      </Header>
    </>
  );
};

export default connect(HeaderPage);
