import React from "react";
import { connect } from "frontity";
import NavLink from "../NavLink";
import { Item } from "./styles";

const NavItem = () => {
  return (
    <>
      <Item>
        <NavLink href="/servicio">Servicios</NavLink>
      </Item>
      <Item>
        <NavLink href="/nosotros">Nosotros</NavLink>
      </Item>
    </>
  );
};

export default connect(NavItem);
