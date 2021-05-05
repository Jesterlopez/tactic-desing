import React from "react";
import { connect } from "frontity";

import { Item } from "./styles";

const NavItem = ({ children }) => {
  return (
    <>
      <Item>{children}</Item>
      {/* <li class="nav__item">
        <a href="#">
          <span class="mask">
            <span>Values.</span>
          </span>
        </a>
      </li>
      <li class="nav__item">
        <a href="#">
          <span class="mask">
            <span>Startup studio.</span>
          </span>
        </a>
      </li>
      <li class="nav__item">
        <a href="#">
          <span class="mask">
            <span>Projects.</span>
          </span>
        </a>
      </li>
      <li class="nav__item">
        <a href="#">
          <span class="mask">
            <span>Jobs.</span>
          </span>
        </a>
      </li> */}
    </>
  );
};

export default connect(NavItem);
