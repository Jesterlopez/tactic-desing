import React from "react";
import { connect } from "frontity";
import NavItem from "../NavItem";
import InfoContact from "../InfoContact";
import Contact from "../Contact";
import ToggleLang from "../ToggleLang";

import { Menu, ContainerNav, NavMenu, MenuFooter, ColorMenu } from "./styles";

const MenuNavbar = ({ state }) => {
  const data = state.source.get(state.router.link);

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
      {data.isHome ? (
        <ColorMenu color="#FF5851" className="menu__color" />
      ) : data.type === "servicios" ? (
        <ColorMenu color="#414a6b" className="menu__color" />
      ) : data.type === "blog" ? (
        <ColorMenu color="yellow" className="menu__color" />
      ) : (
        <ColorMenu color="red" className="menu__color" />
      )}
    </>
  );
};
export default connect(MenuNavbar);
