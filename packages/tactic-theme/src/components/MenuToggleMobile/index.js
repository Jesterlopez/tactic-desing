import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import { Toggle, Icon } from "./styles";

const MenuToggleMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", isOpen);
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
      </Toggle>
    </>
  );
};

export default connect(MenuToggleMobile);
