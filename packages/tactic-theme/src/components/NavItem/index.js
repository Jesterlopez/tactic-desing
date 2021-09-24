import React from "react";
import { connect } from "frontity";

import NavLink from "../NavLink";
import { Item } from "./styles";

const NavItem = () => {
  return (
    <>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve link__menu ">
          <NavLink options="home" background="red" href="/nosotros">
            Nosotros
          </NavLink>
        </Item>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve link__menu">
          <NavLink background="blue" href="/servicios">
            Servicios
          </NavLink>
        </Item>
      </div>
      <div style={{ height: "90", overflow: "hidden" }}>
        <Item className="fadeInUp fadeObserve link__menu">
          <NavLink background="yellow" href="/blog">
            Blog
          </NavLink>
        </Item>
      </div>
    </>
  );
};

export default connect(NavItem);
