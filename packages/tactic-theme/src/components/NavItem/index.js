import React from "react";
import { connect } from "frontity";
import NavLink from "../NavLink";
import { Item } from "./styles";

const NavItem = () => {
  return (
    <>
      <Item>
        <NavLink href="#">Agency.</NavLink>
      </Item>
      <Item>
        <NavLink href="#">Values.</NavLink>
      </Item>
      <Item>
        <NavLink href="#">Startup studio.</NavLink>
      </Item>
      <Item>
        <NavLink href="#">Projects.</NavLink>
      </Item>
      <Item>
        <NavLink href="#">Jobs.</NavLink>
      </Item>
    </>
  );
};

export default connect(NavItem);
