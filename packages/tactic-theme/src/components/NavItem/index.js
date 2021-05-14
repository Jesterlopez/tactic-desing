import React from "react";
import { connect } from "frontity";
import NavLink from "../NavLink";
import { Item } from "./styles";

const NavItem = ({ state }) => {
  return (
    <>
      <Item>
        <NavLink href="/nosotros">Nosotros</NavLink>
      </Item>
      <Item>
        <NavLink href="/servicios">Servicios</NavLink>
      </Item>
      <Item>
        <NavLink href="/blog">Blog</NavLink>
      </Item>
      <Item>
        <NavLink href="/contacto">Contáctanos</NavLink>
      </Item>
    </>
  );
};

export default connect(NavItem);
