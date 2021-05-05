import React from "react";
import { connect } from "frontity";
import SocialMedia from "../SocialMedia";
import {
  Header,
  Head,
  Brand,
  BrandImg,
  ToggleLang,
  HeaderMiddle,
  ToggleMenu,
  Icon,
  Text,
} from "./styles";

const HeaderPage = () => {
  return (
    <>
      <Header>
        <Head>
          <Brand>
            <BrandImg
              src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
              alt="logo tactic center"
            />
          </Brand>
          <ToggleLang>
            <li>
              <a href="#" className="link__active">
                es.
              </a>
            </li>
            <li>
              <a href="#">en.</a>
            </li>
          </ToggleLang>
        </Head>
        <HeaderMiddle>
          <ToggleMenu onClick="" href="#" id="menu__toggle">
            <Icon></Icon>
            <Text>
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>u</span>
            </Text>
          </ToggleMenu>
          <SocialMedia />
        </HeaderMiddle>
      </Header>
    </>
  );
};

export default connect(HeaderPage);
