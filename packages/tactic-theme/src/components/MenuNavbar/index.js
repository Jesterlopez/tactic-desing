import React from "react";
import { connect } from "frontity";
import NavItem from "../NavItem";
import Link from "../Link";
// import AOS from "aos";
// import "aos/dist/aos.css";

import {
  Menu,
  ContainerNav,
  NavMenu,
  ContainerContact,
  MenuFooter,
} from "./styles";

const MenuNavbar = () => {
  return (
    <Menu>
      <ContainerNav>
        <NavMenu>
          <NavItem>
            <Link></Link>
          </NavItem>
        </NavMenu>
        <ContainerContact>
          <a class="contact__address" href="#">
            16 Place Cormontaigne, 59000 Lille France
          </a>
          <a class="contact__phone" href="#">
            +505 89562302
          </a>
          <a class="contact__email" href="#">
            contact@company.com
          </a>
        </ContainerContact>
        <MenuFooter>
          <a href="#" class="send__email">
            <i class="arrow__right">
              <span class="line__arrow">
                <span class="inner"></span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 7.57 12.88"
              >
                <polygon points="1.05 12.88 0 11.81 5.44 6.44 0 1.07 1.05 0 7.57 6.44 1.05 12.88"></polygon>
              </svg>
            </i>
            <span class="text__italic">Want to work with us ?</span>
            <span class="font__bold">Brief Us</span>
          </a>
          <a href="#" class="suscribe">
            <span class="text__italic">Vous voulez de nos nowvelles ?</span>
            <span class="font__bold">Newsletter.</span>
          </a>
        </MenuFooter>
      </ContainerNav>
    </Menu>
  );
};
export default connect(MenuNavbar);
