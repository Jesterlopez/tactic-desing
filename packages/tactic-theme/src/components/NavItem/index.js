import React from "react";
import { connect } from "frontity";
import NavLink from "../NavLink";
import { Item } from "./styles";

const NavItem = ({ state }) => {
  return (
    <>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve">
          <NavLink href="/nosotros">Nosotros</NavLink>
        </Item>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve">
          <NavLink href="/servicios">Servicios</NavLink>
        </Item>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve">
          <NavLink href="/blog">Blog</NavLink>
        </Item>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve">
          <NavLink href="/contactanos">Contáctanos</NavLink>
        </Item>
      </div>
    </>
  );
};

export default connect(NavItem);