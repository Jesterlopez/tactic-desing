import React from "react";
import { connect } from "frontity";
import NavItem from "../NavItem";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import ToggleLang from "../ToggleLang";

import { Menu, ContainerNav, NavMenu, MenuFooter, ColorMenu } from "./styles";

const MenuNavbar = () => {
  return (
    <>
      <Menu id="navbarMenu">
        <ContainerNav>
          <ToggleLang media="mobile" />
          <NavMenu>
            <NavItem />
          </NavMenu>
          <Contact />
          <MenuFooter>
            <InfoContact />
          </MenuFooter>
        </ContainerNav>
      </Menu>
      <ColorMenu className="menu__color" />
    </>
  );
};
export default connect(MenuNavbar);
