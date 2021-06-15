import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import { Toggle, Icon } from "./styles";

const MenuToggleMobile = ({ state, className, actions }) => {
  const data = state.source.get(state.router.link);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", state.theme.isActive);
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("overflow", state.theme.isActive);
    const link = document.querySelectorAll(".link__menu");
    const sendMail = document.querySelector("#send__email");
    const suscribe = document.querySelector("#suscribe");
    const contact = document.querySelector("#contact");

    if (state.theme.isActive) {
      setTimeout(() => {
        sendMail.classList.add("animation");
        suscribe.classList.add("animation");
        contact.classList.add("animation");
      }, 100);
      link.forEach((e, i) => {
        e.classList.add("animation");
        e.style.animationDelay = `calc(${i + 2}00ms)`;
      });
    } else {
      setTimeout(() => {
        sendMail.classList.remove("animation");
        suscribe.classList.remove("animation");
        contact.classList.remove("animation");
      }, 500);
      link.forEach((e) => {
        setTimeout(() => {
          e.classList.remove("animation");
        }, 500);
      });
    }
  }, [state.theme.isActive]);
  return (
    <>
      <Toggle
        onClick={(e) => {
          e.preventDefault();
          // setIsOpen(!isOpen);
          const newState = state.theme.isActive;
          actions.theme.setToggleMenu(!newState);
        }}
        onMouseEnter={() => document.body.classList.add("menu__hover")}
        onMouseLeave={() => document.body.classList.remove("menu__hover")}
        href="#"
        id="menu__toggle"
        className={className}
      >
        <Icon className="iconMenu"></Icon>
      </Toggle>
    </>
  );
};

export default connect(MenuToggleMobile);
