import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import { Toggle, Icon, Text } from "./styles";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", isOpen);
    const link = document.querySelectorAll(".link__menu");
    const sendMail = document.querySelector("#send__email");
    const suscribe = document.querySelector("#suscribe");

    if (isOpen) {
      setTimeout(() => {
        sendMail.classList.add("animation");
        suscribe.classList.add("animation");
      }, 100);
      link.forEach((e, i) => {
        e.classList.add("animation");
        e.style.animationDelay = `calc(${i + 2}00ms)`;
      });
      // console.log(document.body.classList);
    } else {
      setTimeout(() => {
        sendMail.classList.remove("animation");
        suscribe.classList.remove("animation");
      }, 500);
      link.forEach((e) => {
        setTimeout(() => {
          e.classList.remove("animation");
        }, 500);
      });
    }
  }, [isOpen]);
  return (
    <>
      <Toggle
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => document.body.classList.add("menu__hover")}
        onMouseLeave={() => document.body.classList.remove("menu__hover")}
        href="#"
        id="menu__toggle"
      >
        <Icon className="iconMenu"></Icon>
        <Text className="iconMenuText">
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>u</span>
        </Text>
      </Toggle>
    </>
  );
};

export default connect(MenuToggle);
