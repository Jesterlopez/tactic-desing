import React from "react";
import { connect } from "frontity";
import NavItem from "../NavItem";
import InfoContact from "../InfoContact";
import Contact from "../Contact";

import { Menu, ContainerNav, NavMenu, MenuFooter, ColorMenu } from "./styles";

const MenuNavbar = () => {
  return (
    <>
      <Menu id="navbarMenu">
        <ContainerNav>
          <NavMenu>
            <NavItem />
          </NavMenu>
          <Contact></Contact>
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
