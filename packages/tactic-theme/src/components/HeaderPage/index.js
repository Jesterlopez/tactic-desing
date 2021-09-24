import React, { useState, useEffect } from "react";
import { connect } from "frontity";

import SocialMedia from "../SocialMedia";
import MenuToggle from "../MenuToggle";
import ToggleLang from "../ToggleLang";
import Link from "../Link";
import Logo from "../../assets/tactic-digital.png";
import {
  Header,
  Head,
  Brand,
  BrandImg,
  HeaderMiddle,
  NamePage,
} from "./styles";

const HeaderPage = ({ namePage, state }) => {
  return (
    <>
    
      <Header>
        <Head>
          <Brand className="brand">
            <Link href="/" className="fadeOutUp height100 linkHome">
              {/* Tactic Digital */}
              <BrandImg src={state.source.post[1]?.page_logo_src || Logo} alt="logo Tactic Digital" />
            </Link>
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
