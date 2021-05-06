import React, { useState, useEffect } from "react";
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
  NamePage,
} from "./styles";

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", isOpen);
  }, [isOpen]);
  return (
    <>
      <Header>
        <Head>
          <Brand className="brand">
            <BrandImg
              src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
              alt="logo tactic center"
            />
            <NamePage className="text__italic" href="#">
              Name Page
            </NamePage>
          </Brand>
          <ToggleLang className="langToggle">
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
          <ToggleMenu
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            onMouseEnter={() => document.body.classList.add("menu__hover")}
            onMouseLeave={() => document.body.classList.remove("menu__hover")}
            href="#"
            id="menu__toggle"
          >
            <Icon className="iconMenu"></Icon>
            <Text className="iconMenuText">
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
